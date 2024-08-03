import { Routes } from '@angular/router';
import { LoginComponent } from '../_components/login/login.component';

export const routes: Routes = [
	// { path: '', redirectTo: '/home', pathMatch: 'full' },
	// { path: 'home', component: HomeComponent },
	// {
	// 	path: '',
	// 	runGuardsAndResolvers: 'always',
	// 	canActivate: [authGuard],
	// 	children: [
	// 		{ path: 'admin', component: AdminComponent, canDeactivate: [leaveGuard] }
	// 	]
	// },
	{ path: 'login', component: LoginComponent },
	// { path: '**', component: NotFoundComponent },
];
