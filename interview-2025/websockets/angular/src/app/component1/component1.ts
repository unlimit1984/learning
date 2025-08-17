import { Component, inject } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  debounceTime,
  distinctUntilChanged,
  finalize,
  map,
  of,
  startWith,
  switchMap,
} from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ApiService, User } from '../services/api-service';

@Component({
  selector: 'app-component1',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './component1.html',
  styleUrl: './component1.scss',
})
export class Component1 {
  private readonly countSubj = new BehaviorSubject<number>(0);
  count$ = this.countSubj.asObservable();
  double$ = this.count$.pipe(map((v) => v * 2));

  inc() {
    this.countSubj.next(this.countSubj.value + 1);
  }
  dec() {
    this.countSubj.next(this.countSubj.value - 1);
  }
  reset() {
    this.countSubj.next(0);
  }
  // ===============================
  api = inject(ApiService);
  search = new FormControl('', { nonNullable: true });

  // состояние
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  private errorSubject = new BehaviorSubject<string | null>(null);
  error$ = this.errorSubject.asObservable();
  users$ = this.search.valueChanges.pipe(
    startWith(this.search.value),
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((q) => {
      this.loadingSubject.next(true);
      this.errorSubject.next(null);

      return this.api.searchUsers$(q).pipe(
        catchError(() => {
          this.errorSubject.next('Failed to load users');
          return of<User[]>([]);
        }),
        finalize(() => this.loadingSubject.next(false)),
      );
    }),
  );
}
