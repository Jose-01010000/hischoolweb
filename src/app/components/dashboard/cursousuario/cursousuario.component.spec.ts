import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursousuarioComponent } from './cursousuario.component';

describe('CursousuarioComponent', () => {
  let component: CursousuarioComponent;
  let fixture: ComponentFixture<CursousuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursousuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursousuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
