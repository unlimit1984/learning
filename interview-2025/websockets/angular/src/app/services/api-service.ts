import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, map, shareReplay, of, timer, delay} from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http: HttpClient = inject(HttpClient);

  // Базовый список пользователей (кешируем)
  // private users$ = this.http
  //   .get<User[]>('https://jsonplaceholder.typicode.com/users')
  //   .pipe(shareReplay({ bufferSize: 1, refCount: true }));

  // private users$: Observable<User[]> = of([
  //   { id: 1, name: 'John', email: 'john@example.com' },
  //   { id: 2, name: 'Jane', email: 'jane@example.com' },
  //   { id: 3, name: 'Alice', email: 'alice@example.com' },
  //   { id: 4, name: 'Bob',   email: 'bob@example.com' }
  // ]).pipe(
  //   delay(2000), // ⏱ задержка 2 сек
  //   shareReplay({ bufferSize: 1, refCount: true }) // кэш, чтобы не триггерить заново
  // );

  private users$: Observable<User[]> = timer(1000).pipe(map(()=>[
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Jane', email: 'jane@example.com' },
  ]))

  /** Вернёт всех пользователей (Observable, «старый» мир) */
  getUsers$(): Observable<User[]> {
    return this.users$;
  }

  /** Поиск по имени/почте (Observable, «старый» мир) */
  searchUsers$(query: string): Observable<User[]> {
    const q = (query ?? '').trim().toLowerCase();
    if (!q) return this.getUsers$();
    return this.getUsers$().pipe(
      map((users) =>
        users.filter((u) => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)),
      ),
    );
  }
}
