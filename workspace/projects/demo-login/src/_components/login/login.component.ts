import { Component, inject } from '@angular/core';
import { LoginRequest } from '../../../../demo-guards/src/_services/account.service';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../_services/account.service';
import { LoginModel } from '../../_models/login-model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

	private accountService = inject(AccountService);

	private router = inject(Router);

	private toastr = inject(ToastrService);

	// model: LoginRequestModel = {};
	model: LoginModel = { username:"emilys", password:"emilyspass", expiresInMins: 30 };
	
	login() {
		this.accountService.login(this.model).subscribe({
			next: resposne => {
				this.router.navigateByUrl("/user");
			},
			error: error => this.toastr.error(error?.error?.message ?? "An error occured")
		});
	}

}
