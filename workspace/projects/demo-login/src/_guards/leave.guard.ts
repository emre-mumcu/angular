import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
	canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export const leaveGuard: CanDeactivateFn<CanComponentDeactivate> = (component, currentRoute, currentState, nextState) => {
	//return confirm('Do you want to leave and discard unsaved changes if any ?');
	return component.canDeactivate ? component.canDeactivate() : true;
};
