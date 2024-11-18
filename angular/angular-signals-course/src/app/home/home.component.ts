import {afterNextRender, Component, computed, effect, inject, Injector, signal} from '@angular/core';
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
  counter = signal(0);
  // counter = signal(0).asReadonly();
  // counter = signal<Counter>({
  //   value: 0
  // });

  tenXCounter = computed(() => {
    const val = this.counter();
    return val * 10;
  });

  hundredXCounter = computed(() => {
    const val = this.tenXCounter();
    return val * 10;
  });

  values = signal<number[]>([0]);

  injector = inject(Injector);

  constructor() {
    // effect(() => {
    //   console.log(`counter value: ${this.counter()}`);
    // });

    //In case of non-standard usage provide injector for proper cleanup
    afterNextRender(()=>{
      effect(() => {
        console.log(`counter value: ${this.counter()}`);
      },{
        injector: this.injector
      });

    })
  }

  increment() {
    // this.counter.set(this.counter() + 1);
    this.counter.update((counter) => counter + 1);
    // this.counter.update((counter) => ({
    //   ...counter,
    //   value: counter.value + 1
    // }));
  }

  append() {
    this.values.update((values) => [...values, values[values.length - 1] + 1]);
  }
}
