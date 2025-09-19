import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-hooks-child',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './hooks-child.component.html',
  styleUrl: './hooks-child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HooksChild
  implements
    OnInit,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() text: string = 'Initial value from itself';

  formChild: FormGroup = new FormGroup({
    someChildField: new FormControl(''),
  });

  constructor() {
    console.log('HooksChild.constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('HooksChild.ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('HooksChild.ngOnInit');
  }

  ngAfterContentInit(): void {
    console.log('HooksChild.ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('HooksChild.ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('HooksChild.ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('HooksChild.ngAfterViewInit');
  }

  ngOnDestroy(): void {
    console.log('HooksChild.ngOnDestroy');
  }
}
