import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonaceptarComponent } from './botonaceptar.component';

describe('BotonaceptarComponent', () => {
  let component: BotonaceptarComponent;
  let fixture: ComponentFixture<BotonaceptarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonaceptarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonaceptarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
