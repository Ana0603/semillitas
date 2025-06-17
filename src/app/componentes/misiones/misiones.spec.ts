import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Misiones } from './misiones';

describe('Misiones', () => {
  let component: Misiones;
  let fixture: ComponentFixture<Misiones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Misiones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Misiones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
