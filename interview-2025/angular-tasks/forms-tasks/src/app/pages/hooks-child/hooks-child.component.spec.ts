import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HooksChild } from './hooks-child.component';

describe('Hooks', () => {
  let component: HooksChild;
  let fixture: ComponentFixture<HooksChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HooksChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HooksChild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
