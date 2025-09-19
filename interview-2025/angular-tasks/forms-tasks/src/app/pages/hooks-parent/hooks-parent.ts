import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { HooksChild } from '../hooks-child/hooks-child.component';
import { DataService } from '../../services/data-service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-hooks-parent',
  imports: [HooksChild, ReactiveFormsModule],
  templateUrl: './hooks-parent.html',
  styleUrl: './hooks-parent.scss',
})
export class HooksParent
  implements
    OnInit,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  inputVariable: string = 'Initial value from parent';

  form: FormGroup = new FormGroup({
    someField: new FormControl(''),
  });

  constructor(dataService: DataService) {
    console.log('HooksParent.constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('HooksParent.ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('HooksParent.ngOnInit');
  }

  ngAfterContentInit(): void {
    console.log('HooksParent.ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('HooksParent.ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('HooksParent.ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('HooksParent.ngAfterViewInit');
  }

  ngOnDestroy(): void {
    console.log('HooksParent.ngOnDestroy');
  }

  onChangeInput() {
    this.inputVariable = this.form.get('someField')?.value;
  }
}
