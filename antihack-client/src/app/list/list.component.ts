import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
	studentsArray: any = [];
	constructor(private readonly http: HttpClient) {}

	ngOnInit() {
		const jwtToken = localStorage.getItem('JWT_TOKEN');
		const httpOptions = {
			headers: new HttpHeaders({'Content-Type': 'application/json', Authorization: `Bearer ${jwtToken}`})
		};
		this.http.get<any>('http://localhost:8080/api/v1/students/all', httpOptions).subscribe(response => {
			this.studentsArray = response;
		});
	}
}
