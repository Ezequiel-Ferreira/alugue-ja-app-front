import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationUsuarioComponent } from './registration-usuario.component';

describe('RegistrationUsuarioComponent', () => {
  let component: RegistrationUsuarioComponent;
  let fixture: ComponentFixture<RegistrationUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
