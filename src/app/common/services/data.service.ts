import {Injectable} from '@angular/core';
import {Observable, of, ReplaySubject} from 'rxjs';
import {data} from './data';

@Injectable()
export class DataService {

  private _choosenItem$$: ReplaySubject<IItem> = new ReplaySubject(1);

  public get items(): Observable<IItem[]> {
    return of(data);
  }

  // TODO check please;
  public get getChoosedItem(): Observable<IItem> {
    return this._choosenItem$$.asObservable();
  }

  public set setChoosedItem(item: IItem) {
    this._choosenItem$$.next(item);
  }
}
