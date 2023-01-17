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
	token: string = '';
	error: string = '';
	registerGroup: FormGroup = this.formBuilder.group({
		firstName: ['', Validators.required],
		lastName: ['', Validators.required],
		email: ['', Validators.required],
		password: ['', Validators.required]
	});

	constructor(private readonly http: HttpClient, private readonly formBuilder: FormBuilder, private readonly router: Router) {}

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
				if (response) {
					localStorage.setItem('JWT_TOKEN', response.token);
					this.router.navigate(['/list']);
				} else {
					this.error = 'It seems like there already exists a user with the email '
						+ this.registerGroup.get('email')?.value;
				}
			});
	}
}
