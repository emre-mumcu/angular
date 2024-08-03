import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User, UserRequestModel } from '../../_models/user-request-model';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

	http = inject(HttpClient);

	users : User[] = [];

	ngOnInit(): void {
		this.http.get<UserRequestModel>('https://dummyjson.com/users?limit=5').subscribe({
			next: (response) => { this.users = response.users; },
			error: error => console.log(error),
			complete: () => { console.log("Request completed!"); }
		});
	}
}


/*
		this.http.get('https://dummyjson.com/users?limit=5').subscribe({
			next: () => {},
			error: () => {},
			complete: () => {}
		});
*/