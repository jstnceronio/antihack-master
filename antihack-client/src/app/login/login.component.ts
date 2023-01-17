import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {of} from 'rxjs';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	token = '';
	error = '';

	loginGroup: FormGroup = this.formBuilder.group({
		email: ['', Validators.required],
		password: ['', Validators.required]
	});

	constructor(private readonly http: HttpClient, private readonly formBuilder: FormBuilder, private readonly router: Router) {}

	onSubmit() {
		this.http
			.post<any>('http://localhost:8080/api/v1/auth/authenticate', {
				email: `${this.loginGroup.get('email')?.value}`,
				password: `${this.loginGroup.get('password')?.value}`
			})
			.subscribe(response => {
				if (response) {
					localStorage.setItem('JWT_TOKEN', response.token);
					this.router.navigate(['/list']).then();
				} else {
					this.error = 'Invalid login, please try again';
				}
			});
	}
}
