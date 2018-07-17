import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {InfoComponent} from './info/info.component';
import {WeatherComponent} from './weather/weather.component';
import {ListComponent} from './list/list.component';
import {BannerComponent} from './banner/banner.component';
import {ItemComponent} from './list/item/item.component';
import {MakeFilterMenuPipe} from './list/make-filter-menu.pipe';
import {FilterItemsPipe} from './list/filter-items.pipe';
import {PhonePipe} from './list/item/phone.pipe';
import {InitDirective} from './list/init.directive';
import {DataService} from './common/services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    WeatherComponent,
    ListComponent,
    BannerComponent,
    ItemComponent,
    MakeFilterMenuPipe,
    FilterItemsPipe,
    PhonePipe,
    InitDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
