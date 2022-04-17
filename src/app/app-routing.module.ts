import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'a-propos',
    pathMatch: 'full'
  },
  {
    path: 'ouvrire-compte',
    loadChildren: () => import('./view/ouvrire-compte/ouvrire-compte.module').then( m => m.OuvrireComptePageModule)
  },
  {
    path: 'consulter-compte',
    loadChildren: () => import('./view/consulter-compte/consulter-compte.module').then( m => m.ConsulterComptePageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./view/connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./view/inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'a-propos',
    loadChildren: () => import('./view/a-propos/a-propos.module').then( m => m.AProposPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
