import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingIngreso } from './loading-ingreso';

describe('LoadingIngreso', () => {
  let component: LoadingIngreso;
  let fixture: ComponentFixture<LoadingIngreso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingIngreso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingIngreso);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
