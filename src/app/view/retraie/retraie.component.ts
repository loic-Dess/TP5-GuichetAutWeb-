import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-retraie',
  templateUrl: './retraie.component.html',
  styleUrls: ['./retraie.component.scss'],
})
export class RetraieComponent implements OnInit {
  @Input() comptes

  compte = new FormControl()
  operation = new FormControl('', Validators.required)

  constructor(
    private modalctrl: ModalController, 
    private alertController: AlertController
  ) { }

  ngOnInit() {
    
  }

  dismissModal(data = false){
    this.modalctrl.dismiss(data);
  }

  async confirmOperation(){
    let titre = "Validation du dépot" 
    let sousTitre = "Opération réussi"
    let message = "Votre dépot d'un montant de " + this.operation.value + " a bien été pris en compte. \n"

    let role = "valid"

    if (this.compte.value == "compte1"){
      if (this.comptes.comptes[0].solde - this.operation.value < this.comptes.comptes[0].decouvert){
        let sousTitre = "Opération échoué"
        let message = "Impossible d'éffectuer le retrait dépassmeent de decouvert"

        role = "erreur"
      }
    }
    else if (this.compte.value == "compte2"){
      if (this.comptes.comptes[1].solde - this.operation.value < this.comptes.comptes[1].decouvert){
        let sousTitre = "Opération échoué"
        let message = "Impossible d'éffectuer le retrait dépassmeent de decouvert"

        role = "erreur"
      }
    }

    const popup = await this.alertController.create({
      header: titre,
      subHeader: sousTitre,
      message: message,
      buttons: [{
        text:'Continuer',
        handler: () => {
          this.modalctrl.dismiss({montant: this.operation.value, numCompte: this.compte.value}, role)
        }
      }],
    });

    await popup.present();
  }
}

