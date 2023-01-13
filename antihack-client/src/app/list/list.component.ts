import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
	constructor(private readonly http: HttpClient) {}

	ngOnInit() {
		this.http.get<any>('localhost:8080/api/v1/students/all');
	}
}
