import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// css framework
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
  ],
  exports: [
    CommonModule,
    NgModule,
  ]
})
export class SharedModule { }
