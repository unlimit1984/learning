import {
  Component,
  OnChanges,
  OnInit,
  signal,
  SimpleChanges,
  WritableSignal,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'reactive-form-with-submit',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form-with-submit.component.html',
  styleUrl: './reactive-form-with-submit.component.scss',
})
export class ReactiveFormWithSubmit implements OnInit, OnChanges {
  rForm: FormGroup = new FormGroup({
    textField: new FormControl({ value: '', disabled: false }),
  });
  data: Observable<string[]> = new Observable();

  statusVar: string = 'Start';
  statusSignal: WritableSignal<string> = signal('Start');

  ngOnInit(): void {
    console.log('ReactiveForm.ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ReactiveForm.ngOnChanges', changes);
  }

  onClick(event: any) {
    console.log('ReactiveForm.onClick');
    const value: string = this.rForm.get('textField')?.value as string;
    console.log("this.rForm.get('textField')?.value", this.rForm.get('textField')?.value);
    console.log('this.reactiveForm.onClick.event', event);
    this.statusVar = value;
    this.statusSignal.set(value);
  }

  onClear($event: MouseEvent) {
    this.rForm.get('textField')?.setValue('');
    console.log('$event', $event);
  }

  onCheckStatus($event: MouseEvent) {}

  protected readonly onsubmit = onsubmit;

  onSubmit() {
    console.log('ReactiveForm.onSubmit');
  }
}
