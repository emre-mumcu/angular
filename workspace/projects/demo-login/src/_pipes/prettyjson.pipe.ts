import { Pipe, PipeTransform } from '@angular/core';

// ng generate pipe _pipes/prettyjson

@Pipe({
  name: 'prettyjson',
  standalone: true
})
export class PrettyjsonPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
	  return JSON.stringify(value, null, 2)
		  .replace(/ /g, '&nbsp;') // note the usage of `/ /g` instead of `' '` in order to replace all occurences
		  .replace(/\n/g, '<br/>'); // same here
  }

}
