import { Component } from '@angular/core';
import { LogService } from '@core/services';

@Component({
  selector: 'app-root',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {
  title = 'cs1-headfirst-angular';

  constructor(
    private logService: LogService
  ){

  }
}
