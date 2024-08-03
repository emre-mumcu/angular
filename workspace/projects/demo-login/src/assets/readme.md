# Template Forms

```html
<!-- Add FormsModule to component -->
<!-- #loginForm is template reference variable -->
 <!-- [()] is used for two-way binding -->
<form #loginForm="ngForm" (ngSubmit)="login()" class="d-flex" autocomplete="off">
	<input name="username" [(ngModel)]="model.username" class="form-control me-2" placeholder="Username">
	<input name="password" [(ngModel)]="model.password" class="form-control me-2" placeholder="Password" type="password">
	<button class="btn btn-primary" type="submit">Login</button>
</form>
```

Angular services are singletons, services are created when the application starts and disposed when application ends. It is a good place to store states and make http requests.