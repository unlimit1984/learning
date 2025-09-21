import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';
import { randomUUID } from 'crypto';

export interface ChatMessage {
  id: string;
  author: string;
  text: string;
  at?: string;
}
@WebSocketGateway({
  namespace: '/chat',
  cors: { origin: '*' },
})
export class ChatGateway {
  private readonly logger = new Logger(ChatGateway.name);

  @WebSocketServer() server: Server;

  @SubscribeMessage('message')
  onMessage(
    @MessageBody() body: ChatMessage,
    @ConnectedSocket() client: Socket,
  ) {
    this.logger.log(`Message from ${client.id}: ${JSON.stringify(body)}`);
    const payload: ChatMessage = {
      id: body?.id ?? randomUUID(),
      author: body?.author ?? 'anon',
      text: body?.text ?? '',
      at: new Date().toISOString(),
    };
    // отправим всем (включая отправителя)
    // this.server.emit('message', payload);

    // всем, КРОМЕ отправителя (чтобы не было дублей у sender)
    client.broadcast.emit('message', payload);

    // ack для отправителя (вернётся в callback emit на клиенте)
    return payload;
  }
}
