import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  private isLoggedIn = false;

  constructor(private authService:AuthService, private router:Router){
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  ngOnInit(): void {
    if(!this.isLoggedIn)
    {
      this.router.navigate(['/logowanie']);
    }
  }
}
