import { Pipe, PipeTransform } from '@angular/core';

// (String.prototype as any).reverse = function(  ) {
//   return this.split('').reverse().join('');
// };

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string|any[], ...args: any[]): string|any[] {
    // if ( typeof value  === 'string')
    if ( Array.isArray( value ) ) {
      return [...args, ...[...value].reverse()];
    } else {
      return [...args, ...value.split('').reverse()]
                  .join('');
    }
    // return value;
    // return (value as any).reverse();
  }

}
