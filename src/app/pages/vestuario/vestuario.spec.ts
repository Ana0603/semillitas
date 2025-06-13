import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vestuario } from './vestuario';

describe('Vestuario', () => {
  let component: Vestuario;
  let fixture: ComponentFixture<Vestuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vestuario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vestuario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
