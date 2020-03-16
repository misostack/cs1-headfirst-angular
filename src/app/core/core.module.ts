import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {
  LogService
} from './services';

const CORE_SERVICES = [
  LogService,
];



@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
  ],
  providers: [
    ...CORE_SERVICES,
  ],
  exports: [
    HttpClientModule,
  ]
})
export class CoreModule { }
