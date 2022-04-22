import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsulterComptePage } from './consulter-compte.page';

const routes: Routes = [
  {
    path: '',
    component: ConsulterComptePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsulterComptePageRoutingModule {}
