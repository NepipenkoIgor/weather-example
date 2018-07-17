import {Component, OnInit} from '@angular/core';
import {DataService} from '../common/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public items: IItem[];
  public currentType: string;

  constructor(
    private _dataService: DataService
  ) {
  }

  public ngOnInit() {

    this._dataService.items.subscribe((items: IItem[]) => {
      this.items = items;
      this.currentType = items[0].type;
    });
  }

  public chooseItem(item: IItem): void {
    this._dataService.setChoosedItem = item;
  }


  public chooseFilter(type: string): void {
    this.currentType = type;
  }

}
