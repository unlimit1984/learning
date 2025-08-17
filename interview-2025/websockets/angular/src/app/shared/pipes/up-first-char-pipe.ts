import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upFirstChar',
  standalone: true,
})
export class UpFirstCharPipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return '';
  }
}
