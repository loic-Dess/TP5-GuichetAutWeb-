import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsulterComptePageRoutingModule } from './consulter-compte-routing.module';

import { ConsulterComptePage } from './consulter-compte.page';
import { DepotComponent } from '../depot/depot.component';
import { RetraieComponent } from '../retraie/retraie.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ConsulterComptePageRoutingModule
  ],
  declarations: [ConsulterComptePage, DepotComponent, RetraieComponent],
  entryComponents: [DepotComponent, RetraieComponent]
})
export class ConsulterComptePageModule {}
