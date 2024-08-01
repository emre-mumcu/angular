import { Component, OnInit } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
	selector: 'app-binding',
	standalone: true,
	imports: [MarkdownComponent],
	templateUrl: './binding.component.html'
})
export class BindingComponent implements OnInit {

	model: BindingModel = new BindingModel();

	ngOnInit(): void {
		this.model = {
			prop1: `			
				<!-- variable binding -->
				<markdown
				[data]="markdown"
				(ready)="onReady()">
				</markdown>
			`,
			prop2: "",
			prop3: ""
		};
	}

	onReady() {

	}
}


export class BindingModel {
	prop1?: string;
	prop2?: string;
	prop3?: string;
}