import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailedViewPage } from './detailed-view.page';

const routes: Routes = [
  {
    path: '',
    component: DetailedViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailedViewPageRoutingModule {}
