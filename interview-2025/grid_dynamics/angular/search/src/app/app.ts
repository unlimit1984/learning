import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, User } from './services/data.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, filter, map, Observable, startWith, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  ngOnInit(): void {
    this.filteredUsers$ = this.search.valueChanges.pipe(
      startWith(''),
      map((value) => (value ?? '').trim().toLowerCase()),
      debounceTime(400),
      switchMap((value) => {
        if (value.length == 0) {
          return this.users$;
        } else {
          return this.users$.pipe(
            map((users) =>
              users.filter((u) => {
                return u.name.toLowerCase().startsWith(value.toLowerCase());
              }),
            ),
          );
        }
      }),
    );
  }
  private dataService: DataService = inject(DataService);
  users$ = this.dataService.getUsers();

  search: FormControl = new FormControl('');
  filteredUsers$: Observable<User[]> | undefined;
}
