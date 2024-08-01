import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MdfileComponent } from "../../_components/mdfile/mdfile.component";
import { BindingComponent } from "../../_components/binding/binding.component";
import { HistoryComponent } from "../../_components/history/history.component";

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, MdfileComponent, BindingComponent, HistoryComponent],
	templateUrl: './app.component.html'
})
export class AppComponent {
	

}
