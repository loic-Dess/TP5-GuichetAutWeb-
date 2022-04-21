import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ouvrire-compte',
  templateUrl: './ouvrire-compte.page.html',
  styleUrls: ['./ouvrire-compte.page.scss'],
})
export class OuvrireComptePage implements OnInit {
  typeCompte = ''
  user2 = ''
  decouvert = 0
  depot = 0

  isCompteJoin = false

  constructor(
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  hideUser(){
    if (this.typeCompte == "join") 
      this.isCompteJoin = true
    else
      this.isCompteJoin = false
  }

  async creeCompte(){
    let msg = 'Votre compte ' + this.typeCompte + " à bien était crée. "

    if (this.typeCompte != ""){
      if (this.typeCompte = "join") {
        msg += "\n Le second utilisateur est " + this.decouvert + "."
      }
  
      if (this.decouvert > 0) {
        msg += "\n Le découvert autorisé est de " + this.decouvert + "."
      }
  
      if (this.depot > 0) {
        msg += "\n Votre premier dépot " + this.depot + "."
      }
    }
    else {
      msg = "Attention a bien completé tout les champs requie"
    }

    const popup = await this.alertController.create({
      header: "Création du compte",
      subHeader: 'Nouveaux compte',
      message: msg,
      buttons: [{
        text:'Continuer'
      }],
    });

    await popup.present();
  }
}
