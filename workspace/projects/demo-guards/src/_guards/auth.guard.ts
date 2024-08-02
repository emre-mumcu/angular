import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../_services/account.service';

export const authGuard: CanActivateFn = (route, state) => {

	const accountService = inject(AccountService);

	const router = inject(Router);

	console.log(accountService.loginResponse());

	if (accountService.loginResponse()) {
		return true;
	}
	else {
		router.navigate(['/login']);
		return false;
	}
};
