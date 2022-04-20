import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { DepotComponent } from '../depot/depot.component';
import { RetraieComponent } from '../retraie/retraie.component';

@Component({
  selector: 'app-consulter-compte',
  templateUrl: './consulter-compte.page.html',
  styleUrls: ['./consulter-compte.page.scss'],
})
export class ConsulterComptePage implements OnInit {

  constructor(    
    private alertController: AlertController,
    private modalCtrl: ModalController,
    private router: Router
  ) {

  }

  ngOnInit() {
  }

  async depot(){
    const modal = await this.modalCtrl.create({
      component: DepotComponent,
      // componentProps: {}
    })

    await modal.present();
  }

  async retrait(){
    const modal = await this.modalCtrl.create({
      component: RetraieComponent,
      // componentProps: {}
    })

    await modal.present();
  }
}
