import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Usuario } from '../model/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'http://localhost:8000';

  constructor(private jwtHelper: JwtHelperService, private http: HttpClient) {}

  singin(user: Usuario) {
    return this.http.post(`${this.url}/user/login`, user);
  }

  register(user: Usuario) {
    return this.http.post(`${this.url}/user/register`, user);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('login');
  }

  isAuth(): boolean {
    // const token = String(localStorage.getItem('token'));

    if (
      // this.jwtHelper.isTokenExpired(token) ||
      !localStorage.getItem('token')
    ) {
      return false;
    } else {
      return true;
    }
  }
}
