import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
	constructor(private readonly http: HttpClient) {}

	ngOnInit() {
		const JWT_Token = localStorage.getItem('JWT_TOKEN');
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
				'Access-Control-Allow-Headers': 'Content-Type',
				Authorization: `Bearer ${JWT_Token}`
			})
		};
		// this.http.get<any>('localhost:8080/api/v1/students/all', httpOptions).subscribe(respone => {});
	}
}
