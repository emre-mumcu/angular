import { Component, inject } from '@angular/core';
import { AccountService } from '../../_services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html'
})
export class NavComponent {
	accountService = inject(AccountService);
	router = inject(Router);

	logout() {
		this.accountService.logout();
		this.router.navigateByUrl("/home");
	}
}
