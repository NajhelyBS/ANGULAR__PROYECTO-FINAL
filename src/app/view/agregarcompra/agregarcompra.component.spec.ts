import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarcompraComponent } from './agregarcompra.component';

describe('AgregarcompraComponent', () => {
  let component: AgregarcompraComponent;
  let fixture: ComponentFixture<AgregarcompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarcompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarcompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
