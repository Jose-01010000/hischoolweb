import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  tokenDecode: any;
  token: any;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.token = String(localStorage.getItem('token'));
    this.tokenDecode = jwt_decode(this.token);
    console.log(this.tokenDecode);
  }

  salir() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
