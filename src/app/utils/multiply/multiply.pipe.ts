import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply'
})
export class MultiplyPipe implements PipeTransform {

  transform(value: number, factor: number = 1): any {
    return value * factor;
  }

}
