import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonsecundarioComponent } from './botonsecundario.component';

describe('BotonsecundarioComponent', () => {
  let component: BotonsecundarioComponent;
  let fixture: ComponentFixture<BotonsecundarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonsecundarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonsecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
