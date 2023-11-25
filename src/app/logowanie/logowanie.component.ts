import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

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

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  logowanie() {
    if(this.formData.username === '123' &&
      this.formData.password === '123')
    {
      console.log('Zalogowano pomyślnie');
      this.login();
    } else {
      console.log('Błąd logowanie. Sprawdź dane.');
    }
  }

  login()
  {
    this.authService.login();
    this.router.navigate(['/dashboard']);
  }
}