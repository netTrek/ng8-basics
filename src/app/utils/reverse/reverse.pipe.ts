import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

@Pipe ( {
  name: 'reverse'/*,
  pure: false */
} )
export class ReversePipe implements PipeTransform {

  constructor( @Inject ( LOCALE_ID ) private locale: string ) {
  }

  // value ===  {{ value | reverse }}
  transform( value: string | any[] ): string | any[] {

    console.log ( 'eingestellt sprache ist ', this.locale );

    if ( Array.isArray ( value ) ) {
      return value.reverse ();
    } else {
      return value.split ( '' )
                  .reverse ()
                  .join ( '' );
    }
    return value;
  }

}
