import { Injectable } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper = new JwtHelperService();

  public isAuthenticated(): boolean {
	  const token = localStorage.getItem('JWT_ACCESS_TOKEN');
	  if (token) {
		  return !this.jwtHelper.isTokenExpired(token);
	  }
	  return false;
  }
}
