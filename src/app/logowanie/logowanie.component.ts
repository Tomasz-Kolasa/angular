import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.css']
})
export class logowanieComponent implements OnInit {

  formData = {
    username: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  logowanie() {
    if(this.formData.username === 'przykladowyUzytkownik' && this.formData.password === 'przykladoweHaslo') {
      console.log('Zalogowano pomyślnie');
    } else {
      console.log('Błąd logowanie. Sprawdź dane.');
    }
  }

}