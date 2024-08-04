import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { LoginModel } from '../_models/login-model';
import { User } from '../_models/user-model';
import { map } from 'rxjs';
import { UserDetail } from '../_models/user-detail-model';

@Injectable({
	providedIn: 'root'
})
export class AccountService {
	private http = inject(HttpClient);

	currentUser = signal<User | null>(null);
	currentUserDetail = signal<UserDetail | null>(null);

	login(model: LoginModel) {
		console.log("account-service-login");

		const headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});

		// RxJS 
		return this.http.post<User>("https://dummyjson.com/auth/login", model, { headers: headers }).pipe(
			map(response => {
				if (response) {
					localStorage.setItem('user', JSON.stringify(response));
					this.currentUser.set(response);
				}
			})
		);		
	}

	userDetail() {
		console.log("account-service-user-detail");

		const token = this.currentUser()?.token;
		const headers = new HttpHeaders({
			'Authorization': `Bearer ${token}`
		});

		// RxJS
		return this.http.get<UserDetail>("https://dummyjson.com/auth/me", { headers }).pipe(
			map(
				response => {
					if(response) {
						console.log(response);
						localStorage.setItem('user-detail', JSON.stringify(response));
						this.currentUserDetail.set(response);
					}
				}
			)
		);
	}

	logout() {
		localStorage.removeItem('user');
		localStorage.removeItem('user-detail');
		this.currentUser.set(null);
		this.currentUserDetail.set(null);
	}

}

/* 
	const headers = new HttpHeaders({
		'Content-Type': 'application/json',
		'Authorization': 'Bearer your-token-here', 
	});
*/