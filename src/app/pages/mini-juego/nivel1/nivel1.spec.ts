import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nivel1 } from './nivel1';

describe('Nivel1', () => {
  let component: Nivel1;
  let fixture: ComponentFixture<Nivel1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nivel1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nivel1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
