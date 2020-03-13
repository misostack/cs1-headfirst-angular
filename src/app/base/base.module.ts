import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base.component';
import { CoreModule } from '@core/core.module';

@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    BrowserModule,
    BaseRoutingModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [BaseComponent]
})
export class BaseModule { }
