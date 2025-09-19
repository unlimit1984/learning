import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HooksParent } from './hooks-parent';

describe('HooksParent', () => {
  let component: HooksParent;
  let fixture: ComponentFixture<HooksParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HooksParent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HooksParent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
