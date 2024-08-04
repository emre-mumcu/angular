import { Routes } from '@angular/router';
import { LoginComponent } from '../_components/login/login.component';
import { HomeComponent } from '../_components/home/home.component';
import { NotFoundComponent } from '../_components/not-found/not-found.component';
import { UserComponent } from '../_components/user/user.component';
import { authGuard } from '../_guards/auth.guard';
import { leaveGuard } from '../_guards/leave.guard';

export const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{
		path: '',
		runGuardsAndResolvers: 'always',
		canActivate: [authGuard],
		children: [
			{ path: 'user', component: UserComponent, canDeactivate: [leaveGuard] }
		]
	},
	{ path: 'login', component: LoginComponent },
	{ path: '**', component: NotFoundComponent },
];
