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
			url: 'list',
			label: 'Student Overview'
		}
	];

	title = 'antihack-client';
}
