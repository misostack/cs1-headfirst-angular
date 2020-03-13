import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ExampleItemComponent } from './components/example-item/example-item.component';

export const EXAMPLE_COMPONENTS = [

]

@NgModule({
  declarations: [
    ...EXAMPLE_COMPONENTS,
    ExampleItemComponent,
    // pipes
    // directives
  ],
  imports: [
    SharedModule,
  ]
})
export class ExampleModule { }
