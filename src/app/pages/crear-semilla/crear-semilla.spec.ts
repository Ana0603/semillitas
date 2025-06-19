import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSemilla } from './crear-semilla';

describe('CrearSemilla', () => {
  let component: CrearSemilla;
  let fixture: ComponentFixture<CrearSemilla>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearSemilla]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearSemilla);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
