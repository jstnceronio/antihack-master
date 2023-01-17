import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {CanActivate, Router} from "@angular/router";

// Quelle: https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private readonly auth: AuthService, private  readonly router: Router) {

  }

  canActivate(): boolean {
	  if (!this.auth.isAuthenticated()) {
		  console.log('not authenticated')
		  this.router.navigate(['login']);
		  return false;
	  }
	  console.log('authenticated')
	  return true;
  }
}
