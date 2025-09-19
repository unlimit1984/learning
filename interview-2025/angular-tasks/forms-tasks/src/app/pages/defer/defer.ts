import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { DataService } from '../../services/data-service';
import { Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-defer',
  templateUrl: './defer.html',
  styleUrl: './defer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Defer implements OnInit {
  dataService = inject(DataService);
  cdr = inject(ChangeDetectorRef);

  data$: Observable<{ id: number; name: string }> = this.dataService
    .getDelayedResponse(1)
    .pipe(takeUntilDestroyed());

  data: { id: number; name: string };
  isReady = false;

  ngOnInit(): void {
    // Загружаем данные с ID = 1 (задержка 3 секунды)
    this.data$.subscribe((data) => {
      this.isReady = true;
      this.data = { ...data };
      this.cdr.markForCheck();
    });
  }
}
