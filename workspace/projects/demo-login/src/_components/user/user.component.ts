import { Component, inject, OnInit } from '@angular/core';
import { CanComponentDeactivate } from '../../_guards/leave.guard';
import { Observable } from 'rxjs';
import { AccountService } from '../../_services/account.service';
import { CommonModule } from '@angular/common';
import { PrettyjsonPipe } from "../../_pipes/prettyjson.pipe";

@Component({
	selector: 'app-user',
	standalone: true,
	imports: [CommonModule, PrettyjsonPipe],
	templateUrl: './user.component.html'
})
export class UserComponent implements OnInit, CanComponentDeactivate {

	accountService = inject(AccountService);

	userDetailBtnName: string = "";
	userDetailBtnClass: string = "";

	btnPrep() {
		this.userDetailBtnName = localStorage.getItem("user-detail") ? "Update User Detail" : "Get User Detail";

		this.userDetailBtnClass = localStorage.getItem("user-detail") ? "btn btn-primary" : "btn btn-success";
	}

	ngOnInit(): void {
		this.btnPrep();
	}

	canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
		return confirm('Do you want to leave and discard unsaved changes if any ?');
	}

	getAuthUserInfo() {
		this.accountService.userDetail().subscribe({
			next: response => {
				this.btnPrep();
			},
			error: error => console.log(error)
		});		
	}
}
