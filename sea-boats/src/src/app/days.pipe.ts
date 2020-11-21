import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'days'
})
export class DaysPipe implements PipeTransform {
  transform(value: string): string {
    if (value == null) {
      return "No Limit";
    }
    else {
      return value + " consecutive days";
    }
  }
}
