import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UIContainer } from './containers';


const routes: Routes = [
  {
    path: '', component: UIContainer, pathMatch: 'full',
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UIRoutingModule { }
