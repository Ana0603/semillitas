import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nivel3 } from './nivel3';

describe('Nivel3', () => {
  let component: Nivel3;
  let fixture: ComponentFixture<Nivel3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nivel3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nivel3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
