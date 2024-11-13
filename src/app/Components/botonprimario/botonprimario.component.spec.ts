import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonprimarioComponent } from './botonprimario.component';

describe('BotonprimarioComponent', () => {
  let component: BotonprimarioComponent;
  let fixture: ComponentFixture<BotonprimarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonprimarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonprimarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
