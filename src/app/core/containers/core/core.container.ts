import { Component } from '@angular/core';

import { environment } from '@environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './core.container.html',
  styleUrls: []
})
// tslint:disable-next-line: component-class-suffix : to allow seperate app structure in container vs component
export class CoreContainer {
  environment = environment;
}
