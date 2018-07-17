import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterItems'
})
export class FilterItemsPipe implements PipeTransform {

  transform(items: IItem[], type: string): IItem[] {
    if (!Array.isArray(items)) {
      return [];
    }
    return items.filter((item: IItem) => item.type === type);
  }

}
