import {Directive, Input, OnInit} from '@angular/core';
import {DataService} from '../common/services/data.service';

@Directive({
  selector: '[appInit]'
})
export class InitDirective implements OnInit {

  @Input()
  public item: IItem;

  @Input()
  public first: boolean;

  constructor(
    private _dataService: DataService
  ) {
  }

  public ngOnInit(): void {
    if (!this.first) {
      return;
    }
    this._dataService.setChoosedItem = this.item;
  }

}
