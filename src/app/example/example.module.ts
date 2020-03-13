import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import {
  ExampleRoutingModule,
  EXAMPLE_COMPONENTS,
} from './example-routing.module';


@NgModule({
  declarations: [
    ...EXAMPLE_COMPONENTS,
  ],
  imports: [
    SharedModule,
    ExampleRoutingModule,
  ]
})
export class ExampleModule { }
