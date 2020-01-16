import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'/*,
  pure: false */
})
export class ReversePipe implements PipeTransform {

  // value ===  {{ value | reverse }}
  transform(value: string|any[]): string|any[] {
    if ( Array.isArray( value )) {
      return value.reverse();
    } else {
      return value.split('').reverse().join('');
    }
    return value;
  }

}
