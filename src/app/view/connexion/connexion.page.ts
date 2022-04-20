import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  logDB = [{
    id: "user@mail.com",
    password: "123456"
  }]
  
  id = "";
  password = "";

  constructor(
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {

  }

  async logIn(){
    if (this.id == "" && this.password == "") {
      return;
    }

    let islogged = false;

    if (this.id != this.logDB[0].id && this.password != this.logDB[0].password) {
      const popup = await this.alertController.create({
        header: "Connexion",
        subHeader: 'Erreur de connexion',
        message: 'Vérifiez votre identifiant/mot de passe',
        buttons: [{
          text:'Continuer'
        }],
      });

      await popup.present();
    } else {
      islogged = true;
    }

    if (islogged) {
      localStorage.setItem('idUser', this.id);
      localStorage.setItem('isLogged', '1');

      this.router.navigateByUrl('/a-propos',{skipLocationChange:true}).then(() => {
        this.router.navigate(['/a-propos']);
      });
    }
  }
}
