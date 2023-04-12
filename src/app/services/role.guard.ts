import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  userProfile: any;

  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.userProfile = JSON.parse(localStorage.getItem('user')!);
    return this.authService.canActivateProtectedRoutes$.pipe(
      map((canActivateProtectedRoutes: boolean) => {
        if (canActivateProtectedRoutes) {
          // role check only if route contain data.role
          // https://javascript.plainenglish.io/4-ways-to-check-whether-the-property-exists-in-a-javascript-object-20c2d96d8f6e
          if (route.data.role === this.userProfile['role']) {
            return true
          }
          else{ 
            return false 
          }
        }
        return false;
      })
    );
  }
  showToaster(arg0: string, arg1: string) {
    throw new Error('Method not implemented.');
  }
  
}
