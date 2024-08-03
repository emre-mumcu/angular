import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { LoginModel } from '../_models/login-model';
import { UserModel } from '../_models/user-model';
import { map } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AccountService {

	private http = inject(HttpClient);

	currentUser = signal<UserModel | null>(null);

	private headers = new HttpHeaders({
		'Content-Type': 'application/json'
	});

	login(model: LoginModel) {
		return this.http.post<UserModel>("https://dummyjson.com/auth/login", model, { headers: this.headers }).pipe(
			map(response => {
				if(response) {
					localStorage.setItem('user', JSON.stringify(response));
					this.currentUser.set(response);
				}
			})
		)
		;
	}

	logout() {
		localStorage.removeItem('user');
		this.currentUser.set(null);
	}

}

/* 
	const headers = new HttpHeaders({
		'Content-Type': 'application/json',
		'Authorization': 'Bearer your-token-here', 
	});

	private http = inject(HttpClient);

	private headers = new HttpHeaders({
		'Content-Type': 'application/json'
	});

	login(model: LoginRequestModel) {
		return this.http.post("https://dummyjson.com/auth/login", model, { headers: this.headers });
	}
*/