import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesServiceWithFetch {
  env = environment;

  async loadAllCourses(): Promise<Course[]> {
    const response = await fetch(`${this.env.apiRoot}/courses`);
    const payload = await response.json();
    // return payload.courses as Course[];

    // return Promise.resolve(payload.courses);
    // So the async await syntax is going to inspect the return type.
    // If it's a promise like we are doing here, it's going to use the promise directly.
    // If it's a primitive type it's going to wrap it in a promise.
    return payload.courses;
  }

  //==============
  // Dmytro help
  // async loadAllCourses2(): Promise<Course[]> {
  //   return fetch(`${this.env.apiRoot}/courses`)
  //     .then((response) => response.json().courses)
  // }
  //
  // courses = new Promise((resolve, reject) => {
  //   fetch(`${this.env.apiRoot}/courses`)
  //     // .then((response) => response.json().courses);
  //     .then((response) => resolve(response.json().courses))
  //     .catch(err => reject(err));
  // })
}

function* loadAllCourses3() {
  yield [];
  yield ['wow'];
  yield ['wow', 'that'];
  yield ['wow', 'that', 'generator'];
}
