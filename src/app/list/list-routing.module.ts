import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataService } from '../tools/data.service';

import { ListPage } from './list.page';

const routes: Routes = [
  {
    path: '',
    component: ListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPageRoutingModule {}
