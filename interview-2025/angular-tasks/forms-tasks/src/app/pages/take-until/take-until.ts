import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { interval, Subject, takeUntil } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-take-until',
  imports: [],
  templateUrl: './take-until.html',
  styleUrl: './take-until.scss',
})
export class TakeUntil implements OnInit, OnDestroy, AfterViewInit {
  destroy$ = new Subject<void>();
  @ViewChild('data', { static: false }) paragraph: any;

  ngOnInit(): void {
    // interval(1000).pipe();
  }

  onStart() {
    interval(1000)
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        this.paragraph.nativeElement.textContent = value;
      });
  }

  onStop() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngAfterViewInit(): void {
    // console.log('this.paragraph:', this.paragraph.nativeElement.textContent);
    // this.paragraph.nativeElement.textContent = 'Hello World'
    // interval(1000)
    //   .pipe(
    //     takeUntil(this.destroy$))
    //   .subscribe((value) => {
    //     this.paragraph.nativeElement.textContent = value;
    //   });
  }

  ngOnDestroy(): void {
    // this.destroy$.next();
    // this.destroy$.complete();
  }
}
