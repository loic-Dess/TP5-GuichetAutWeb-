import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsulterComptePageRoutingModule } from './consulter-compte-routing.module';

import { ConsulterComptePage } from './consulter-compte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsulterComptePageRoutingModule
  ],
  declarations: [ConsulterComptePage]
})
export class ConsulterComptePageModule {}
