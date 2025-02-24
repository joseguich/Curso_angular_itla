import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverserText',
})
export class ReverserTextPipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}
