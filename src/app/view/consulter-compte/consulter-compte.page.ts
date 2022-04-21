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
  total
  solde1
  solde2
  decouvert1
  decouvert2

  operations = [
    {
      date: "14/11/2022",
      type: "Retrait",
      compte : "compte1",
      montant : 250
    },
    {
      date: "31/12/2022",
      type: "Dépot",
      compte : "compte1",
      montant : 300
    }
  ];

  comptes = {
    total: 13500,
    comptes: [{
      solde: 8320,
      decouvert: 150,
    },
    {
      solde: 5180,
      decouvert: 0,
    }]
  }

  constructor(    
    private alertController: AlertController,
    private modalCtrl: ModalController,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.total = this.comptes.total

    this.solde1 = this.comptes.comptes[0].solde
    this.solde2 = this.comptes.comptes[1].solde

    this.decouvert1 = this.comptes.comptes[0].decouvert
    this.decouvert2 = this.comptes.comptes[1].decouvert
  }

  async depot(){
    const modal = await this.modalCtrl.create({
      component: DepotComponent,
    })

    await modal.present();

    const data = await modal.onWillDismiss();

    if (data.role === "valid"){
      if (data.data.numCompte == "compte1") this.solde1 += parseInt(data.data.montant)
      else if (data.data.numCompte == "compte2") this.solde2 += parseInt(data.data.montant)

      this.total = this.solde1 + this.solde2

      this.operations.push({
        date: "14/11/2022",
        type: "Dépot",
        compte : data.data.numCompte,
        montant : data.data.montant
      })
    }
  }

  async retrait(){
    const modal = await this.modalCtrl.create({
      component: RetraieComponent,
      componentProps: {comptes: this.comptes}
    })

    await modal.present();

    const data = await modal.onWillDismiss();

    if (data.role === "valid"){
      if (data.data.numCompte == "compte1") this.solde1 -= parseInt(data.data.montant)
      else if (data.data.numCompte == "compte2") this.solde2 -= parseInt(data.data.montant)

      this.total = this.solde1 + this.solde2

      this.operations.push({
        date: new Date(Date.now()).toDateString(),
        type: "Retrait",
        compte : data.data.numCompte,
        montant : data.data.montant
      })
    }
  }

  updateDecouvert(numCompte){
    if(numCompte == 1)  this.comptes.comptes[0].decouvert = this.decouvert1
    else if (numCompte == 2) this.comptes.comptes[1].decouvert = this.decouvert2
  }
}
