import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BaseModule } from '@base/base.module';
// routing
import { CoreRoutingModule } from './core-routing.module';
// services, guards, pipes

// containers, components
import { CoreContainer } from './containers';


const CORE_PROVIDERS = [
  // Global App Services
];

const CORE_CONTAINERS = [
  CoreContainer,
];

const CORE_COMPONENTS = [

];

@NgModule({
  declarations: [
    ...CORE_CONTAINERS,
    ...CORE_COMPONENTS,
  ],
  imports: [
    BrowserModule,
    BaseModule,
    CoreRoutingModule,
  ],
  providers: [
    CORE_PROVIDERS,
  ],
  bootstrap: [CoreContainer]
})
export class CoreModule { }
