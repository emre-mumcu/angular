import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService, LoginRequest } from '../../_services/account.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
	imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html'
})
export class LoginComponent {

	router = inject(Router);
	
	accountService = inject(AccountService);

	loginRequest: LoginRequest = {};

	onSubmit(form: any) {
		if (form.valid) {
			console.log('Form Submitted!', form.value);

			this.loginRequest.username = "emilys";
			this.loginRequest.password = "emilyspass";
			this.loginRequest.expiresInMins = 20;

			this.accountService.login(this.loginRequest).subscribe({
				next: _ =>  {
					this.router.navigateByUrl('/admin');
					console.log("hehe");
				},
				error: error => console.log(error)
			});			
		}
	}
}
