import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private _AuthService: AuthService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise (resolve => {
        this._AuthService.User.subscribe(user => {
          if (user) {
            // authorised so return true
            resolve(true);
          } else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['login']);
            resolve(false);
          }
        })
      })
      this._AuthService.User.subscribe((user:any) => {
        
      })
      return true
    }
    
  }


@Injectable({
  providedIn: 'root'
})
  
export class IamUserGuard implements CanActivate {
  constructor(private router: Router, private _AuthService: AuthService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this._AuthService.User.subscribe((user:any) => {  
      if (user) {
        // authorised so return true
        this.router.navigate(['/Home']);
        return false;
      } else {
        // not logged in so redirect to login page with the return url
        this.router.navigate(['login']);
        return true;
      }
    })
   return true
  }

}
