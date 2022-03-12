import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 30): string {
    return value.length >= limit ? `${value.substring(0, limit - 3)}...` : value;
  }
}
