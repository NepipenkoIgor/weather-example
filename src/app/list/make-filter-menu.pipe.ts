import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'makeFilterMenu'
})
export class MakeFilterMenuPipe implements PipeTransform {

  transform(items: IItem[]): Set<string> {
    if (!Array.isArray(items)) {
      return new Set();
    }
    return new Set(items.map((item: IItem) => item.type));
  }

}
