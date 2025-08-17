import { Component, signal } from '@angular/core';
import { Component1 } from './component1/component1';
import { Component2 } from './component2/component2';
import { UpFirstCharPipe } from './shared/pipes/up-first-char-pipe';
import { Chat } from './chat/chat';

@Component({
  selector: 'app-root',
  imports: [Component1, Component2, UpFirstCharPipe, Chat],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('test-app');
}
