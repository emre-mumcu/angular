import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AccountService {

	loginUrl = "https://dummyjson.com/auth/login";

	private http = inject(HttpClient);

	loginResponse = signal<LoginResponse | null>(null);

	login(body: LoginRequest) {
		return this.http.post<LoginResponse>(this.loginUrl, body).pipe(
			map(response => {
				if (response) {
					console.log(response);
					this.setLoginResponse(response);
				}
			})
		)
	}

	setLoginResponse(response: LoginResponse) {
		const user = Object.assign(new User(),
			{ username: response.username, token: response.token });

		this.loginResponse.set(response);

		localStorage.setItem('user', JSON.stringify(user));
	}

	logout() {
		localStorage.removeItem('user');
	}

}

export class LoginRequest {
	username?: string;
	password?: string;
	expiresInMins?: number;
}

export interface LoginResponse {
	id: number;
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	gender: string;
	image: string;
	token: string;
	refreshToken: string;
}

export class User {
	username?: string;
	token?: string;
}