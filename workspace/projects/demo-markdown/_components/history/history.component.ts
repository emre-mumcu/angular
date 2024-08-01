import { Component } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
	selector: 'app-history',
	standalone: true,
	imports: [MarkdownComponent],
	templateUrl: './history.component.html'
})
export class HistoryComponent {

}
