import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpService} from "../services/http.service";

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
	token = '';
	error = '';
	registerGroup: FormGroup = this.formBuilder.group({
		firstName: ['', Validators.required],
		lastName: ['', Validators.required],
		email: ['', Validators.required],
		password: ['', Validators.required],
		role: ['', Validators.required]
	});

	constructor(private readonly http: HttpClient, private readonly formBuilder: FormBuilder, private readonly router: Router, private readonly httpService: HttpService) {}

	onSubmit() {
		this.httpService.register(this.registerGroup).subscribe(response => {
			if (response) {
				localStorage.setItem('JWT_ACCESS_TOKEN', response.token);
				localStorage.setItem('JWT_REFRESH_TOKEN', response.refreshToken);
				this.router.navigate(['/list']).then();
			} else {
				this.error = `It seems like there already exists a user with the email ${this.registerGroup.get('email')?.value}`;
			}
		});
	}
}
