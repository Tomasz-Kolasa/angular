import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(public authService:AuthService, private router:Router){

  }

  logout()
  {
    this.authService.logout();
    this.router.navigate(['/logowanie'])
  }
}
