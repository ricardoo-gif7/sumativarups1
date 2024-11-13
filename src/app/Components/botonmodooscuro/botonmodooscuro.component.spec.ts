import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonmodooscuroComponent } from './botonmodooscuro.component';

describe('BotonmodooscuroComponent', () => {
  let component: BotonmodooscuroComponent;
  let fixture: ComponentFixture<BotonmodooscuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonmodooscuroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonmodooscuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
