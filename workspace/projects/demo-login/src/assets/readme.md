# ngx-toastr

https://www.npmjs.com/package/ngx-toastr
https://ngx-toastr.vercel.app/

% npm install ngx-toastr
% npm install @angular/animations

Styles

```json
"styles": [
  "styles.scss",
  "node_modules/ngx-toastr/toastr.css"
]
```

Service Registration (standalone)

```ts
import { AppComponent } from "./src/app.component";
import { provideAnimations } from "@angular/platform-browser/animations";

import { provideToastr } from "ngx-toastr";

bootstrapApplication(AppComponent, {
	providers: [
		provideAnimations(), // required animations providers
		provideToastr(), // Toastr providers
		// or
		provideToastr({
			timeOut: 10000,
			positionClass: "toast-bottom-right",
			preventDuplicates: true,
		}),
	],
});
```

Use

```ts
import { ToastrService } from 'ngx-toastr';

@Component({...})
export class YourComponent {
  constructor(private toastr: ToastrService) {}

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
```

# ngx-spinner

https://www.npmjs.com/package/ngx-spinner

Using npm (\* this one is used):
% npm i ngx-spinner

Using angular-cli:
% ng add ngx-spinner

// angular.json
{
"styles": [
"node_modules/ngx-spinner/animations/timer.css"
]
}

Import BrowserAnimationsModule and NgxSpinnerModule

// app.config.ts
export const appConfig: ApplicationConfig = {
providers: [
importProvidersFrom(NgxSpinnerModule),
//importProvidersFrom([BrowserAnimationsModule])
provideAnimations(),
]
};

// create a service for spinner
% ng g s \_services/spinner

# Interceptors

ng g interceptor \_inteceptors/loading --skip-tests

Update app.config.ts

export const appConfig: ApplicationConfig = {
providers: [

    	provideHttpClient(withInterceptors([loadingInterceptor])),

    ]

};

Add spinner component to app.component.ts

<ngx-spinner>
	<h3>Please Wait...</h3>
</ngx-spinner>

Import NgxSpinnerComponent in app.component.ts

@Component({
selector: 'app-root',
standalone: true,
imports: [NgxSpinnerComponent],
templateUrl: './app.component.html'
})
export class AppComponent

# ngClass

<!-- Normal HTML -->
<input placeholder="some text">
<!-- Interpolation -->
<input placeholder="{{ variable }}">
<!-- Property Binding -->
<input [placeholder]="variable">

<div [ngClass]="'first second'">
<div [ngClass]="propName">
<div [ngClass]="['first', 'second']">
<div [ngClass]="{first: true, second: true, third: true}">
<div [ngClass]="{'first second': true}">
<td [ngClass]="className"></td>

<td [ngClass]="val > 10 ? 'red' : 'green'">{{ val }}</td>
<input type="text" [ngClass]="control.isInvalid ? 'error' : ''" />
<input type="text" [class.error]="control.isInvalid" />
<td [ngClass]="getClassOf(val)">{{ val }}</td>
<td [ngClass]="{ low: val >= 0 && val <=5, medium: val > 5 && val <= 10, high: val > 10}">
  {{ val }}
</td>

# Template Forms

```html
<!-- Add FormsModule to component -->
<!-- #loginForm is template reference variable -->
<!-- [()] is used for two-way binding -->
<form
	#loginForm="ngForm"
	(ngSubmit)="login()"
	class="d-flex"
	autocomplete="off"
>
	<input
		name="username"
		[(ngModel)]="model.username"
		class="form-control me-2"
		placeholder="Username"
	/>
	<input
		name="password"
		[(ngModel)]="model.password"
		class="form-control me-2"
		placeholder="Password"
		type="password"
	/>
	<button class="btn btn-primary" type="submit">Login</button>
</form>
```

Angular services are singletons, services are created when the application starts and disposed when application ends. It is a good place to store states and make http requests.

```ts
import { Pipe, PipeTransform } from "@angular/core";

// ng generate pipe _pipes/prettyjson

@Pipe({
	name: "prettyjson",
	standalone: true,
})
export class PrettyjsonPipe implements PipeTransform {
	transform(value: unknown, ...args: unknown[]): unknown {
		return JSON.stringify(value, null, 2)
			.replace(/ /g, "&nbsp;") // note the usage of `/ /g` instead of `' '` in order to replace all occurences
			.replace(/\n/g, "<br/>"); // same here
	}
}
```

# ngClass

The ngClass directive in Angular is used to dynamically add or remove CSS classes based on conditions. Here's how you can use ngClass in various scenarios:

You can add a static class using ngClass:

<div [ngClass]="'my-class'">This div has a static class</div>

Conditional Class
You can conditionally apply a class based on a boolean expression:

<div [ngClass]="{ 'active': isActive }">This div is active if isActive is true</div>

Using Multiple Classes
You can apply multiple classes based on different conditions:

<div [ngClass]="{ 'active': isActive, 'disabled': isDisabled }">
  This div has 'active' class if isActive is true and 'disabled' class if isDisabled is true
</div>

Static and Conditional Classes Together
You can combine static and conditional classes:

<div [ngClass]="['static-class', { 'active': isActive }]">
  This div always has 'static-class' and has 'active' if isActive is true
</div>

# Using ngClass in a Standalone Component

If you're using standalone components, the setup is similar. Ensure you import CommonModule if needed for Angular directives like ngClass.

## Standalone Component Class (TypeScript)

```ts
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-ng-class-demo",
	templateUrl: "./ng-class-demo.component.html",
	styleUrls: ["./ng-class-demo.component.css"],
	standalone: true,
	imports: [CommonModule],
})
export class NgClassDemoComponent {
	isActive = true;
	isDisabled = false;

	toggleActive(): void {
		this.isActive = !this.isActive;
	}

	toggleDisabled(): void {
		this.isDisabled = !this.isDisabled;
	}
}
```

## Standalone Component Template (HTML)

```html
<div>
	<h3>ngClass Demo</h3>

	<button (click)="toggleActive()">Toggle Active</button>
	<button (click)="toggleDisabled()">Toggle Disabled</button>

	<div [ngClass]="{ 'active': isActive, 'disabled': isDisabled }">
		This div's classes are controlled by ngClass
	</div>
</div>
```

## Standalone Component Styles (CSS)

```css
.active {
	color: green;
	font-weight: bold;
}

.disabled {
	color: gray;
	text-decoration: line-through;
}
```

By using ngClass, you can dynamically add or remove classes based on your component's logic, making it a powerful tool for styling your Angular applications.
