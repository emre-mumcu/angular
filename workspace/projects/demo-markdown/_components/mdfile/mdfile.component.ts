import { Component } from '@angular/core';
import { ClipboardButtonComponent, MarkdownComponent } from 'ngx-markdown';

@Component({
	selector: 'app-mdfile',
	standalone: true,
	imports: [MarkdownComponent, ClipboardButtonComponent],
	templateUrl: './mdfile.component.html'
})
export class MdfileComponent {
	onLoad(e: any) {
		console.log(e);
	}

	onError(e: any) {
		console.log(e);
	}
}
