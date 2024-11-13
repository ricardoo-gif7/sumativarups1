import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumativaViewComponent } from './sumativa-view.component';

describe('SumativaViewComponent', () => {
  let component: SumativaViewComponent;
  let fixture: ComponentFixture<SumativaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SumativaViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SumativaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
