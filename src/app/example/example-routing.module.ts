import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleListContainer } from './containers/example-list-container/example-list.container';

export const EXAMPLE_ENTRY_COMPONENTS = [
  ExampleListContainer,
];

const routes: Routes = [
  {
    path: '',
    component: ExampleListContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule { }
