import { Component, computed, effect, inject, Injector, signal } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Course, sortCoursesBySeqNo } from '../models/course.model';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { CoursesCardListComponent } from '../courses-card-list/courses-card-list.component';
import { MatDialog } from '@angular/material/dialog';
import { MessagesService } from '../messages/messages.service';
import { catchError, from, throwError } from 'rxjs';
import { toObservable, toSignal, outputToObservable, outputFromObservable } from '@angular/core/rxjs-interop';

type Counter = {
  value: number;
};

@Component({
  selector: 'home',
  standalone: true,
  imports: [MatTabGroup, MatTab, CoursesCardListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // counter = signal(0);
  // counter = signal(0).asReadonly();
  counter = signal<Counter>({
    value: 0
  });

  values = signal<number[]>([0]);

  increment() {
    // this.counter.set(this.counter() + 1);
    // this.counter.update((counter) => counter + 1);
    this.counter.update((counter) => ({
      ...counter,
      value: counter.value + 1
    }));
  }

  append() {
    this.values.update((values) => [...values, values[values.length - 1] + 1]);
  }
}
