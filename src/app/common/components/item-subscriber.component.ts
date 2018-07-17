import {ChangeDetectorRef, Inject, NgZone, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {Subscription} from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';

export class ItemSubscriberComponent implements OnInit, OnDestroy {

  public item: IItem;
  public itemSubscription: Subscription;

  constructor(
    @Inject(DataService) private _dataService: DataService,
    @Inject(ChangeDetectorRef) private _cd: ChangeDetectorRef,
    @Inject(NgZone) private _zone: NgZone,
  ) {
  }

  public ngOnInit(): void {
    this.itemSubscription = this._dataService.getChoosedItem.subscribe((item: IItem) => {
      this.item = item;
      this._cd.detectChanges();
    });
  }

  public ngOnDestroy(): void {
    this.itemSubscription.unsubscribe();
  }

}
