import { Injectable } from '@angular/core';
import { Observable, of, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {
    console.log('DataService.constructor');
  }

  getDelayedResponse = (id: number): Observable<{ id: number; name: string }> => {
    if (id === 1) {
      return timer(3000).pipe(
        switchMap(() =>
          of({
            id: 1,
            name: 'Первый',
          }),
        ),
      );
    }
    if (id === 2) {
      return timer(1000).pipe(
        switchMap(() =>
          of({
            id: 2,
            name: 'Второй',
          }),
        ),
      );
    }
    if (id === 3) {
      return timer(5000).pipe(
        switchMap(() =>
          of({
            id: 3,
            name: 'Третий',
          }),
        ),
      );
    }
    if (id === 4) {
      return timer(2000).pipe(
        switchMap(() =>
          of({
            id: 4,
            name: 'Четвёртый',
          }),
        ),
      );
    }
    return timer(2000).pipe(
      switchMap(() =>
        of({
          id: -999,
          name: 'unknown',
        }),
      ),
    );
  };
}
