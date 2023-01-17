import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {of} from 'rxjs';
import {HttpService} from "../services/http.service";

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

	constructor(private readonly http: HttpClient, private readonly formBuilder: FormBuilder, private readonly router: Router, private readonly httpService: HttpService) {}

	onSubmit() {
		this.httpService.login(this.loginGroup).subscribe(response => {
				if (response) {
					localStorage.setItem('JWT_ACCESS_TOKEN', response.token);
					localStorage.setItem('JWT_REFRESH_TOKEN', response.refreshToken);

					this.router.navigate(['/list']).then();
				} else {
					this.error = 'Invalid login, please try again';
				}
			});
	}
}
