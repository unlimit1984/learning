import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'template-driven-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.scss',
})
export class TemplateDrivenForm {
  @ViewChild('myForm') myForm: NgForm;

  // onSubmit(form: NgForm) {
  //   console.log('form.value', form.value);
  //   console.log('form', form);
  //   console.log('myForm', this.myForm);
  // }
  onSubmit() {
    console.log('this.myForm', this.myForm);
    console.log('this.myForm.value', this.myForm.controls['name'].value);
    console.log('this.myForm.value', this.myForm.controls['gender'].value);
  }
}
