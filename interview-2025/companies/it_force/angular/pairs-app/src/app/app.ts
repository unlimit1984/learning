import { AsyncPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, ReactiveFormsModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('it-force-app');
  form: FormGroup = new FormGroup({
    memoryInput: new FormControl(''),
  });

  sideBehaviorSubject$ = new BehaviorSubject<number[][]>([]);

  generate() {
    const side: number = this.form.get('memoryInput')?.value;
    if (this.sideIsGood(side)) {
      const cells: number[][] = generateFromSide(side);
      this.sideBehaviorSubject$.next(cells);
    }
  }

  sideIsGood(square: number) {
    return square > 0 && square % 2 === 0;
  }
}

function generateFromSide(side: number): number[][] {
  const result: number[][] = [];
  const uniqueCount = Math.pow(side, 2) / 2;
  const allSortedValues = [];
  for (let i = 0; i < uniqueCount; i++) {
    allSortedValues.push(i);
    allSortedValues.push(i);
  }
  const flattedResult: number[] = [];
  for (let i = uniqueCount * 2 - 1; i >= 0; i--) {
    const randomIndex = getRandomValueBefore(i+1);
    flattedResult.push(allSortedValues[randomIndex]);
    allSortedValues.splice(randomIndex, 1);
  }
  for(let i = 0; i < side; i++) {
    result[i] = [];
    for (let j = 0; j < side; j++) {
      const value = flattedResult.shift(); // could be undefined
      if (value === undefined) {
        throw new Error("Not enough elements in flattedResult");
      }
      result[i][j] = value;
    }
  }

  return result;
}

function getRandomValueBefore(val: number) {
  return Math.floor(Math.random() * val);
}
