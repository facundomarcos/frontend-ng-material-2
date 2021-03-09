import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoNuevoComponent } from './ingreso-nuevo.component';

describe('IngresoNuevoComponent', () => {
  let component: IngresoNuevoComponent;
  let fixture: ComponentFixture<IngresoNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoNuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
