import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniJuego } from './mini-juego';

describe('MiniJuego', () => {
  let component: MiniJuego;
  let fixture: ComponentFixture<MiniJuego>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniJuego]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniJuego);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
