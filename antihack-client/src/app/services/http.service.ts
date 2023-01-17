import { Injectable } from '@angular/core';
import * as http from "http";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private readonly http: HttpClient, private readonly router: Router) {

  }

  getStudents() {
    const jwtToken = localStorage.getItem('JWT_ACCESS_TOKEN');
	const httpOptions = {
		headers: new HttpHeaders({'Content-Type': 'application/json', Authorization: `Bearer ${jwtToken}`})
	};
	return this.http.get<any>('http://localhost:8080/api/v1/students/all', httpOptions);
  }

  register(registerGroup: FormGroup) {
	  return this.http.post<any>('http://localhost:8080/api/v1/auth/register', {
			  firstname: `${registerGroup.get('firstName')?.value}`,
			  lastname: `${registerGroup.get('lastName')?.value}`,
			  email: `${registerGroup.get('email')?.value}`,
			  password: `${registerGroup.get('password')?.value}`,
			  role: `${registerGroup.get('role')?.value}`
		  });
  }

  login(loginGroup: FormGroup) {
	  return this.http.post<any>('http://localhost:8080/api/v1/auth/authenticate', {
			  email: `${loginGroup.get('email')?.value}`,
			  password: `${loginGroup.get('password')?.value}`
		  });
  }

  logout() {
	  localStorage.removeItem('JWT_ACCESS_TOKEN');
	  localStorage.removeItem('JWT_REFRESH_TOKEN');
	  this.router.navigate(['/login']);
  }
}
