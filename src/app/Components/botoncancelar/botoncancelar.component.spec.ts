import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoncancelarComponent } from './botoncancelar.component';

describe('BotoncancelarComponent', () => {
  let component: BotoncancelarComponent;
  let fixture: ComponentFixture<BotoncancelarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotoncancelarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotoncancelarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
