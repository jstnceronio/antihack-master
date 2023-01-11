import { Component } from '@angular/core';
import { ObINavigationLink } from '@oblique/oblique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	navigation: ObINavigationLink[] = [
		{
			url: 'home',
			label: 'Home'
		},
		{
			url: 'login',
			label: 'Login'
		},
		{
			url: 'list',
			label: 'List'
		},
		{
			url: 'register',
			label: 'Register'
		}
	]

  title = 'antihack-client';
}
