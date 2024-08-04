import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "../_components/nav/nav.component";
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user-model';
import { UserDetail } from '../_models/user-detail-model';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, NavComponent],
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	
	private accountService = inject(AccountService);
	
	ngOnInit(): void {
		
		// Persistance
		const userStr = localStorage.getItem('user');
		const userDetailStr = localStorage.getItem('user-detail');
		if(!userStr) return;
		if(!userDetailStr) return;
		
		const user:User = JSON.parse(userStr);
		const userDetail:UserDetail = JSON.parse(userDetailStr);
		
		this.accountService.currentUser.set(user);
		this.accountService.currentUserDetail.set(userDetail);
	}
}
