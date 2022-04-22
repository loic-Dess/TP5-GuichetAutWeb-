import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss'],
})
export class DepotComponent implements OnInit {
  compte = new FormControl()
  operation = new FormControl('', Validators.required)
  
  constructor(
    private modalctrl: ModalController, 
    private alertController: AlertController
  ) { }

  ngOnInit() {}

  dismissModal(data = false){
    this.modalctrl.dismiss(data);
  }

  async confirmOperation(){
    let titre = "Validation du retrait" 
    let sousTitre = "Opération réussi"
    let message = "Votre retrait d'un montant de " + this.operation.value + " a bien été pris en compte. \n"

    const popup = await this.alertController.create({
      header: titre,
      subHeader: sousTitre,
      message: message,
      buttons: [{
        text:'Continuer',
        handler: () => {
          this.modalctrl.dismiss({montant: this.operation.value, numCompte: this.compte.value}, "valid")
        }
      }],
    });

    await popup.present();
  }
}
