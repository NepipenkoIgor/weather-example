import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {SafeHtml} from '@angular/platform-browser/src/security/dom_sanitization_service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public html = '<p style="color:red">hi all</p>';

  constructor(
    private _sanitizer: DomSanitizer,
  ) {

  }

  public safeHTML(): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(this.html);
  }
}
