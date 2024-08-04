import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-select',
  standalone: true,
	imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './select.component.html'
})
export class SelectComponent {

}
