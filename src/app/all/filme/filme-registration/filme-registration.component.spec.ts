import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeRegistrationComponent } from './filme-registration.component';

describe('FilmeRegistrationComponent', () => {
  let component: FilmeRegistrationComponent;
  let fixture: ComponentFixture<FilmeRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmeRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
