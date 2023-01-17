import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
	token!: string;
	registerGroup: FormGroup = this.formBuilder.group({
		firstName: ['', Validators.required],
		lastName: ['', Validators.required],
		email: ['', Validators.required],
		password: ['', Validators.required]
	});
	router!: Router;

	constructor(private readonly http: HttpClient, private readonly formBuilder: FormBuilder) {}

	onSubmit() {
		this.http
			.post<any>('http://localhost:8080/api/v1/auth/register', {
				firstname: `${this.registerGroup.get('firstName')?.value}`,
				lastname: `${this.registerGroup.get('lastName')?.value}`,
				email: `${this.registerGroup.get('email')?.value}`,
				password: `${this.registerGroup.get('password')?.value}`,
				role: 2
			})
			.subscribe(response => {
				localStorage.setItem('JWT_TOKEN', response.token);
			});
	}
}
