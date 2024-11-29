import { afterNextRender, Component, computed, effect, Inject, inject, Injector, OnInit, signal } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Course, sortCoursesBySeqNo } from '../models/course.model';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { CoursesCardListComponent } from '../courses-card-list/courses-card-list.component';
import { MatDialog } from '@angular/material/dialog';
import { MessagesService } from '../messages/messages.service';
import { catchError, from, Observable, throwError } from 'rxjs';
import { toObservable, toSignal, outputToObservable, outputFromObservable } from '@angular/core/rxjs-interop';
import { CoursesServiceWithFetch } from '../services/courses-fetch.service';

@Component({
  selector: 'home',
  standalone: true,
  imports: [MatTabGroup, MatTab, CoursesCardListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  #courses = signal<Course[]>([]);

  // coursesService = inject(CoursesServiceWithFetch);
  coursesService = inject(CoursesService);

  beginnerCourses = computed(() => {
    const courses = this.#courses();
    return courses.filter((course) => course.category === 'BEGINNER');
  });

  advancedCourses = computed(() => {
    const courses = this.#courses();
    return courses.filter((course) => course.category === 'ADVANCED');
  });

  constructor() {
    effect(() => {
      console.log(`Beginner courses: `, this.beginnerCourses());
      console.log(`Advanced courses: `, this.advancedCourses());
    });

    // OPTION 1
    this.loadCourses().then(() => console.log(`All courses loaded`, this.#courses()));

    // OPTION 3
    // afterNextRender(() => {
    //   this.loadCourses().then(() => console.log(`All courses loaded`, this.courses()));
    // });
  }

  // OPTION 2 with OnInit lifecycle angular hook
  ngOnInit(): void {
    // this.loadCourses().then(() => console.log(`All courses loaded`, this.courses()));
  }

  async loadCourses() {
    try {
      // console.log('loadCourses()');
      const courses = await this.coursesService.loadAllCourses();
      this.#courses.set(courses.sort(sortCoursesBySeqNo));
    } catch (err) {
      alert(`Error loading courses!`);
      console.error(err);
    }
  }
}
