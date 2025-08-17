import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { BehaviorSubject, timer } from 'rxjs';

export interface ChatMessage {
  id: string;
  author: string;
  text: string;
  at?: string; // сервер может добавить timestamp
  pending?: boolean;
}

@Injectable({ providedIn: 'root' })
export class ChatService {
  private socket: Socket;
  private messagesSub = new BehaviorSubject<ChatMessage[]>([]);
  messages$ = this.messagesSub.asObservable();
  private readonly seen = new Set<string>(); // защита от дублей

  constructor() {
    this.socket = io('http://localhost:3000/chat', {
      transports: ['websocket'],
    });

    // на всякий случай снимаем старые слушатели (HMR/dev)
    this.socket.off('message');
    this.socket.on('message', (msg: ChatMessage) => this.push(msg));
  }

  private push(msg: ChatMessage) {
    if (msg.id && this.seen.has(msg.id)) return;
    if (msg.id) this.seen.add(msg.id);
    this.messagesSub.next([...this.messagesSub.value, msg]);
  }

  sendMessage(author: string, text: string) {
    const temp: ChatMessage = {
      id: crypto.randomUUID(),
      author: author.trim(),
      text: text.trim(),
      pending: true,
    };

    if (!temp.author || !temp.text) return;

    // оптимистично показываем сразу
    this.push(temp);

    // отправляем с ack — сервер вернёт финальный payload
    // this.socket.emit('message', temp, (ack: ChatMessage) => {
    //   const list = this.messagesSub.value.map((m) =>
    //     m.id === temp.id ? { ...ack, pending: false } : m,
    //   );
    //   this.messagesSub.next(list);
    // });
    timer(1000).subscribe(() => {
      this.socket.emit('message', temp, (ack: ChatMessage) => {
        const list = this.messagesSub.value.map(m =>
          m.id === temp.id ? { ...ack, pending: false } : m
        );
        this.messagesSub.next(list);
      });
    });
  }

  disconnect() {
    this.socket.disconnect();
  }
}
