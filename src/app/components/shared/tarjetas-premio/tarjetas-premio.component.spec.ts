import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasPremioComponent } from './tarjetas-premio.component';

describe('TarjetasPremioComponent', () => {
  let component: TarjetasPremioComponent;
  let fixture: ComponentFixture<TarjetasPremioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetasPremioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetasPremioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
