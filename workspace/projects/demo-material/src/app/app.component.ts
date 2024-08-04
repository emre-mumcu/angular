import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectComponent } from "../_components/select/select.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SelectComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'demo-material';
}
