import {Component} from '@angular/core';
import {ObINavigationLink} from '@oblique/oblique';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	navigation: ObINavigationLink[] = [
		{
			url: 'Student Overview',
			label: 'List'
		}
	];

	title = 'antihack-client';
}
