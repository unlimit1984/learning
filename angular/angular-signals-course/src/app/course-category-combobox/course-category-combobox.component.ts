import {
  Component,
  contentChild, contentChildren,
  effect,
  ElementRef,
  input,
  model
} from '@angular/core';
import { CourseCategory } from '../models/course-category.model';

@Component({
  selector: 'course-category-combobox',
  standalone: true,
  imports: [],
  templateUrl: './course-category-combobox.component.html',
  styleUrl: './course-category-combobox.component.scss'
})
export class CourseCategoryComboboxComponent {
  label = input.required<string>();

  value = model.required<CourseCategory>();

  // title = contentChild<ElementRef>('titleRef');
  // title = contentChild.required<ElementRef>('titleRef');
  // title = contentChild<SomeComponent>('titleRef');
  // title = contentChild('titleRef', {
  //   read: 'Exactly what you want'
  // });

  // titles = contentChildren('titleRef');
  titles = contentChildren<ElementRef>('titleRef');

  constructor() {
    effect(() => {
      // console.log('title: ', this.title());
      console.log('titles: ', this.titles());
    });
  }

  onCategoryChanged(category: string) {
    this.value.set(category as CourseCategory);
  }
}
