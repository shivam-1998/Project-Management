import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private _authService: AuthService,private _router: Router) {
    
   }

  canActivate(route: ActivatedRouteSnapshot,state:RouterStateSnapshot): boolean {
    const currentUser = this._authService.currentUserValue;

    
    if (currentUser) {
      //check if route is resctriced by role
          console.log(currentUser.role);
          // console.log(route.data.roles);
          
      if (route.data.roles && route.data.roles.indexOf(currentUser.role)=== -1 ){
          this._router.navigate(['/home']);
          return false;
      }
       return true;
    } else {            
      this._router.navigate(['/login']);
      return false
    }
  }
}