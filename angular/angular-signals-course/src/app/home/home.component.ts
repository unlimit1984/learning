import {
  afterNextRender,
  Component,
  computed,
  effect,
  Inject,
  inject,
  Injector,
  OnInit,
  signal
} from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Course, sortCoursesBySeqNo } from '../models/course.model';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { CoursesCardListComponent } from '../courses-card-list/courses-card-list.component';
import { MatDialog } from '@angular/material/dialog';
import { MessagesService } from '../messages/messages.service';
import { catchError, from, Observable, throwError } from 'rxjs';
import {
  toObservable,
  toSignal,
  outputToObservable,
  outputFromObservable
} from '@angular/core/rxjs-interop';
import { CoursesServiceWithFetch } from '../services/courses-fetch.service';

@Component({
  selector: 'home',
  standalone: true,
  imports: [MatTabGroup, MatTab, CoursesCardListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  // # is a private modifier
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
    this.loadCourses().then(() =>
      console.log(`All courses loaded`, this.#courses())
    );

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

  onCourseUpdated(updatedCourse: Course) {
    const courses = this.#courses();
    const newCourses = courses.map((course) =>
      course.id === updatedCourse.id ? updatedCourse : course
    );
    this.#courses.set(newCourses);
  }

  async onCourseDeleted(courseId: string) {
    try {
      await this.coursesService.deleteCourse(courseId);
      const courses = this.#courses();
      const newCourses = courses.filter((course) => course.id !== courseId);
      this.#courses.set(newCourses);
    } catch (err) {
      console.error(err);
      alert('Error deleting course.');
    }
  }
}
