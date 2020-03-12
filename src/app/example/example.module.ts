import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { ListComponent } from './container/list/list.component';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ExampleRoutingModule
  ]
})
export class ExampleModule { }
