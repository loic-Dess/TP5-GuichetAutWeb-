import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OuvrireComptePageRoutingModule } from './ouvrire-compte-routing.module';

import { OuvrireComptePage } from './ouvrire-compte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OuvrireComptePageRoutingModule
  ],
  declarations: [OuvrireComptePage]
})
export class OuvrireComptePageModule {}
