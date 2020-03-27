import { NgModule } from '@angular/core';

import { UIRoutingModule } from './ui-routing.module';
import { SharedModule } from '../shared/shared.module';
// services, guards, pipes

// containers, components
import {
  UIContainer,
} from './containers';

const UI_PROVIDERS = [

];

const UI_CONTAINERS = [
  UIContainer,
];

const UI_COMPONENTS = [

];


@NgModule({
  declarations: [
    ...UI_CONTAINERS,
    ...UI_COMPONENTS,
  ],
  imports: [
    SharedModule,
    UIRoutingModule
  ],
  providers: [
    ...UI_PROVIDERS,
  ]
})
export class UIModule { }
