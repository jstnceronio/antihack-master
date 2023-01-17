import { Injectable } from '@angular/core';
import * as http from "http";
import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private readonly http: HttpClient, private readonly router: Router) {

  }

  getStudents() {

  }

  register(registerGroup: FormGroup) {
	  return this.http.post<any>('http://localhost:8080/api/v1/auth/register', {
			  firstname: `${registerGroup.get('firstName')?.value}`,
			  lastname: `${registerGroup.get('lastName')?.value}`,
			  email: `${registerGroup.get('email')?.value}`,
			  password: `${registerGroup.get('password')?.value}`,
			  role: 2
		  });
  }

  login(loginGroup: FormGroup) {
	  return this.http.post<any>('http://localhost:8080/api/v1/auth/authenticate', {
			  email: `${loginGroup.get('email')?.value}`,
			  password: `${loginGroup.get('password')?.value}`
		  });
  }

  logout() {
	  localStorage.removeItem('JWT_TOKEN');
	  this.router.navigate(['/login']);
  }
}
