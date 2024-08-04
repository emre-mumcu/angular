import { inject, Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
	providedIn: 'root'
})
export class SpinnerService {
	spinnerRequestCount = 0;
	private spinnerService = inject(NgxSpinnerService);
	busy() {
		this.spinnerRequestCount++;
		this.spinnerService.show(undefined, {
			type: 'timer',
			bdColor: 'rgba(77,77,77,0.7)',
			color: '#ffffff',
			size: 'medium',
			fullScreen: true
		});
	}
	idle() {
		this.spinnerRequestCount--;
		if (this.spinnerRequestCount <= 0) {
			this.spinnerRequestCount = 0;
			this.spinnerService.hide();
		}

	}
}
