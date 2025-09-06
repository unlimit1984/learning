import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface User {
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getUsers():  Observable<User[]> {
    return of([
      { name: 'John', age: 30 },
      { name: 'Jane', age: 25 },
      { name: 'Bob', age: 40 },
      { name: 'Alice', age: 28 },
      { name: 'Eve', age: 35 },
    ]);
  }
}
