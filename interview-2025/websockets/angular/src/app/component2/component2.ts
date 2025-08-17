import { Component, computed, effect, inject, signal } from '@angular/core';
import { ApiService, User } from '../services/api-service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { catchError, debounceTime, distinctUntilChanged, of, startWith, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component2',
  imports: [CommonModule],
  templateUrl: './component2.html',
  styleUrl: './component2.scss',
})
export class Component2 {
  // состояние
  count = signal(0);

  // производное значение
  double = computed(() => this.count() * 2);

  // побочный эффект (для примера)
  log = effect(() => console.log('count =', this.count()));

  inc() {
    this.count.update((v) => v + 1);
  }
  dec() {
    this.count.update((v) => v - 1);
  }
  reset() {
    this.count.set(0);
  }
  // ===============================
  api = inject(ApiService);
  // реактивный ввод
  query = signal('');
  loading = signal(false);
  error = signal<string | null>(null);

  // из сигнала делаем observable с дебаунсом…
  private query$ = toObservable(this.query).pipe(
    startWith(this.query()),
    debounceTime(300),
    distinctUntilChanged(),
  );

  // …дергаем сервис (Observable) и превращаем результат обратно в Signal
  users = toSignal<User[]>(
    this.query$.pipe(
      switchMap((q) => {
        this.loading.set(true);
        this.error.set(null);
        return this.api.searchUsers$(q).pipe(
          catchError(() => {
            this.error.set('Failed to load users');
            return of<User[]>([]);
          }),
        );
      }),
    ),
  );

  private readonly _usersLoaded = effect(() => {
    void this.users(); // подписка на значение
    this.loading.set(false);
  });
}
