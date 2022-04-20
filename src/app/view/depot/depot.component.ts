import { Component, OnInit } from '@angular/core';
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
  solde = new FormControl('')
  
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
    let message = "Votre retrait d'un montant de " + this.operation.value + " a bien été pris en compte. \n" + 
    "Le solde de votre compte : " + this.compte.value + " est de " + this.solde.value

    const popup = await this.alertController.create({
      header: titre,
      subHeader: sousTitre,
      message: message,
      buttons: [{
        text:'Continuer',
        handler: () => {
          this.dismissModal();
        }
      }],
    });

    await popup.present();
  }
}
