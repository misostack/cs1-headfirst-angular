import { Component } from '@angular/core';
import { LogService } from './core/services/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cs1-headfirst-angular';

  constructor(
    private logService: LogService
  ){

  }
}
