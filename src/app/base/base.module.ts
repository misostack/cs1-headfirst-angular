import { NgModule } from '@angular/core';
import { HttpService, LogService } from '.';

@NgModule({
  declarations: [],
  imports: [
   HttpService,
   LogService,
  ],
  exports: [

  ],
  providers: [
    HttpService,
    LogService,
  ]
})
export class BaseModule { }
