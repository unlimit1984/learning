import { Component, inject, OnDestroy } from '@angular/core';
import { ChatMessage, ChatService } from '../services/chat/chat.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  imports: [FormsModule, CommonModule],
  templateUrl: './chat.html',
  styleUrl: './chat.scss',
})
export class Chat implements OnDestroy {
  private readonly chatService = inject(ChatService);
  private sub?: Subscription;

  messages: ChatMessage[] = [];
  author = '';
  text = '';

  constructor() {
    this.sub = this.chatService.messages$.subscribe((list) => {
      this.messages = list;
    });
  }

  send() {
    console.log('send');
    this.chatService.sendMessage(this.author, this.text);
    this.text = '';
  }

  // Если сообщение старше 24 часов — показываем дату + время,
  // иначе — только время.
  isOlderThanDay(iso?: string): boolean {
    if (!iso) return false;
    const t = new Date(iso).getTime();
    return Date.now() - t > 24 * 60 * 60 * 1000;
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
    this.chatService.disconnect();
  }
}
