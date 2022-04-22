import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}
  
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const isLogged = !!(+await localStorage.getItem('isLogged'));
      
    if(isLogged){
      return true;
    } else{
      const navigation = this.router.getCurrentNavigation();

      let url = '/';

      if(navigation){
        url = navigation.extractedUrl.toString();
      }
      const popup = await this.alertController.create({
        header: "Connecxion",
        message: "Voulez vous connecter ?",
        buttons: [
          "Annuler", 
          {
            text:'Se connecter',
            handler: () => {
              this.router.navigate(['connexion']);
            }
          }
        ],
      });

      await popup.present();

      return false;
    }
  }
}
