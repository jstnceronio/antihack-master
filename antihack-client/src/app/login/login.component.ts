import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	token!: string;
	loginGroup: FormGroup = this.formBuilder.group({
		email: ['', Validators.required],
		password: ['', Validators.required]
	});

	constructor(private readonly http: HttpClient, private readonly formBuilder: FormBuilder, private readonly router: Router) {}

	onSubmit() {
		this.http
			.post<any>('localhost:8080/api/v1/auth/authenticate', {
				email: `${this.loginGroup.get('email')?.value}`,
				password: `${this.loginGroup.get('password')?.value}`
			}).subscribe((response) => {
				localStorage.setItem("JWT_TOKEN", JSON.stringify(response))
			});
		}
}
