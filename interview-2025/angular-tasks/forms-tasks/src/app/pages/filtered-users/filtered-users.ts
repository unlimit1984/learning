import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  merge,
  mergeMap,
  Observable,
  of,
  shareReplay,
  startWith,
  tap
} from 'rxjs';
import { CommonModule } from '@angular/common';

interface User {
  name: string;
}

@Component({
  selector: 'app-filtered-users',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './filtered-users.html',
  styleUrl: './filtered-users.scss',
})
export class FilteredUsers implements OnInit {
  form: FormGroup;

  allUsers$: Observable<User[]> = of([
    {
      name: 'Mark',
    },
    {
      name: 'Mateusz',
    },
    {
      name: 'Christopher',
    },
    {
      name: 'Ann',
    },
  ]);

  filteredUsers$: Observable<User[]> = of([]);

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      search: new FormControl(''),
    });

    // this.filteredUsers$ = this.form.valueChanges.pipe(
    //   startWith({}),
    //   debounceTime(1000),
    //   mergeMap(() => {
    //     const searchValue = this.form.get('search')?.value || '';
    //     return this.allUsers$.pipe(
    //       map((users) =>
    //         users.filter((u) => u.name.toLowerCase().startsWith(searchValue.toLowerCase())),
    //       ),
    //     );
    //   }),
    // );
    this.filteredUsers$ = this.form.valueChanges.pipe(
      startWith({}),
      map(value => value.trim()),
      debounceTime(1000),
      distinctUntilChanged(),
      mergeMap((value) => {
        const searchValue = this.form.get('search')?.value || '';
        return this.allUsers$.pipe(
          map((users) =>
            users.filter((u) => u.name.toLowerCase().startsWith(searchValue.toLowerCase())),
          ),
        );
      }),
      shareReplay(1)
    );
  }

  onSearch() {}
}
