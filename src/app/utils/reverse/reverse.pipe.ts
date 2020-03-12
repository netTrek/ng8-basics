import { Pipe, PipeTransform } from '@angular/core';
import { split } from 'ts-node';

@Pipe ( {
  name: 'reverse'
} )
export class ReversePipe implements PipeTransform {

  transform( value: unknown[] | string ): unknown[] | string {
    if ( Array.isArray ( value ) ) {
      return value.reverse ();
    }
    return value.split ( '' )
                .reverse ()
                .join ( '' );
  }

}
