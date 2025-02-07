import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';
import { Course } from '../models/course.model';
import { GetCoursesResponse } from '../models/get-courses.response';
import { SkipLoading } from '../loading/skip-loading.component';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  http = inject(HttpClient);

  env = environment;

  async loadAllCourses(): Promise<Course[]> {
    // So if you return a promise from an async function, that is going to be your output value.
    // But if instead you return a primitive value such as, for example, an empty array in this case, and
    // notice I am not returning here a promise.
    // I am returning an empty array.
    // But because this is an async function, the return value, if it's a primitive value and not a promise,
    // it's going to be wrapped automatically in a promise by the async syntax.
    // return [];

    const courses$ = this.http.get<GetCoursesResponse>(
      `${this.env.apiRoot}/courses`,
      {
        context: new HttpContext().set(SkipLoading, true)
      }
    );

    //deprecated
    //courses$.toPromise()
    const response = await firstValueFrom(courses$);
    return response.courses;
  }

  async getCourseById(courseId: string): Promise<Course> {
    const course$ = this.http.get<Course>(
      `${this.env.apiRoot}/courses/${courseId}`
    );
    return await firstValueFrom(course$);
  }

  async createCourse(course: Partial<Course>): Promise<Course> {
    const course$ = this.http.post<Course>(
      `${this.env.apiRoot}/courses`,
      course
    );
    // return await firstValueFrom(course$); //redundant
    return firstValueFrom(course$);
  }

  async saveCourse(
    courseId: string,
    changes: Partial<Course>
  ): Promise<Course> {
    const course$ = this.http.put<Course>(
      `${this.env.apiRoot}/courses/${courseId}`,
      changes
    );
    // return await firstValueFrom(course$); //redundant
    return firstValueFrom(course$);
  }

  async deleteCourse(courseId: string) {
    const delete$ = this.http.delete(`${this.env.apiRoot}/courses/${courseId}`);
    // return await firstValueFrom(delete$); //redundant
    return firstValueFrom(delete$);
  }
}
