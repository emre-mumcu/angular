import { Routes } from '@angular/router';
import { authGuard } from '../_guards/auth.guard';
import { HomeComponent } from '../_components/home/home.component';
import { AdminComponent } from '../_components/admin/admin.component';
import { LoginComponent } from '../_components/login/login.component';
import { NotFoundComponent } from '../_components/not-found/not-found.component';
import { leaveGuard } from '../_guards/leave.guard';

export const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{
		path: '',
		runGuardsAndResolvers: 'always',
		canActivate: [authGuard],
		children: [
			{ path: 'admin', component: AdminComponent, canDeactivate: [leaveGuard] }			
		]
	},
	{ path: 'login', component: LoginComponent },	
	{ path: '**', component: NotFoundComponent },

];
