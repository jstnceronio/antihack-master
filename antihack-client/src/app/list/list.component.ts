import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {HttpService} from "../services/http.service";

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
	studentsArray: any = [];
	searchText: any;
	constructor(private readonly http: HttpClient, private readonly httpService: HttpService) {}

	ngOnInit() {
		this.httpService.getStudents().subscribe(response => {
			this.studentsArray = response;
		});
	}

	logout() {
		this.httpService.logout();
	}
}
