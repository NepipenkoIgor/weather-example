import {Component} from '@angular/core';
import {ItemSubscriberComponent} from '../common/components/item-subscriber.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent extends ItemSubscriberComponent {

}
