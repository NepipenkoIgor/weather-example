import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: number): string {
    if (!phone) {
      return '';
    }
    const phoneStr = phone.toString();
    return `${phoneStr.slice(0, 3)}
     ${phoneStr.slice(3, 7)} ${phoneStr.slice(7, 10)}`;
  }

}
