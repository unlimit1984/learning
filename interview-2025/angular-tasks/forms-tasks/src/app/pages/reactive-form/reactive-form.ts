import {
  Component,
  OnChanges,
  OnInit,
  signal,
  Signal,
  SimpleChanges,
  WritableSignal,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.scss',
})
export class ReactiveForm implements OnInit, OnChanges {
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
    console.log('this.rForm.get(\'textField\')?.value', this.rForm.get('textField')?.value);
    console.log('this.reactiveForm.onClick.event', event);
    this.statusVar = value;
    this.statusSignal.set(value);
  }

  onClear($event: MouseEvent) {
    this.rForm.get('textField')?.setValue('');
    console.log('$event', $event);
  }

  onCheckStatus($event: MouseEvent) {}
}
