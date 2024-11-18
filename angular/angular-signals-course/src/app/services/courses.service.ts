import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';
import { Course } from '../models/course.model';
import { GetCoursesResponse } from '../models/get-courses.response';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  async loadAllCourses(): Promise<Course[]> {

    // So if you return a promise from an async function, that is going to be your output value.
    // But if instead you return a primitive value such as, for example, an empty array in this case, and
    // notice I am not returning here a promise.
    // I am returning an empty array.
    // But because this is an async function, the return value, if it's a primitive value and not a promise,
    // it's going to be wrapped automatically in a promise by the async syntax.
    return [];
  }
}
