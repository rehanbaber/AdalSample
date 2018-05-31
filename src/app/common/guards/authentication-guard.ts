import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Adal6Service } from 'adal-angular6';
import { environment } from '../../../environments/environment';
 
@Injectable()
export class AuthenticationGuard implements CanActivate, CanActivateChild {
  constructor(
    private router: Router,
    private adalSvc: Adal6Service
  ) { }
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.adalSvc.userInfo.authenticated) {
        //localStorage.setItem('id_token', this.adalSvc.Adal6User.token);
        //console.log(this.adalSvc.Adal6User.token);
      return true;
    } else {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
 
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(childRoute, state);
  }
}