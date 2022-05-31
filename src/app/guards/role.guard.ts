import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import decode from 'jwt-decode';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(public router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data?.['expectedRole'];
    const token = String(localStorage.getItem('token'));

    // console.log(decode(token));
    // const { user, roleId } = decode(token);

    // if (this.authService.isAuth() || roleId !== expectedRole) {
    //   console.log('Usuario no autorizado');
    //   return false;
    // }

    return true;
  }
}
