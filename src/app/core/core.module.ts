import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogService } from './services/log.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    LogService,
  ],
  exports: [
    CommonModule,
  ]
})
export class CoreModule { }
