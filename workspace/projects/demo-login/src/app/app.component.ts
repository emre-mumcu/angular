import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "../_components/nav/nav.component";
import { AccountService } from '../_services/account.service';
import { UserModel } from '../_models/user-model';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, NavComponent],
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	
	private accountService = inject(AccountService);
	
	ngOnInit(): void {
		const userStr = localStorage.getItem('user');
		if(!userStr) return;
		const user:UserModel = JSON.parse(userStr);
		this.accountService.currentUser.set(user);
	}
}
