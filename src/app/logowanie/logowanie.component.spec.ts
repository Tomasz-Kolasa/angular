import { ComponentFixture, TestBed } from '@angular/core/testing';

import { logowanieComponent } from './logowanie.component';
import {FormsModule} from "@angular/forms";

describe('Testy komponentu logowanie', () => {
  let component: logowanieComponent;
  let fixture: ComponentFixture<logowanieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [logowanieComponent],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(logowanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('komponent powinien zostac utworzony', () => {
    expect(component).toBeTruthy();
  });

  it('username powinien być pusty', () => {
    expect(component.formData.username).toBeFalsy();
  })

  it('password powinien być pusty', () => {
    expect(component.formData.password).toBeFalsy();
  })
});
