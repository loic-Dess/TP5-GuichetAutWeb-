import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './controler/guard.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'a-propos',
    pathMatch: 'full'
  },
  {
    path: 'ouvrire-compte',
    loadChildren: () => import('./view/ouvrire-compte/ouvrire-compte.module').then( m => m.OuvrireComptePageModule),
    canActivate: [GuardGuard]
  },
  {
    path: 'consulter-compte',
    loadChildren: () => import('./view/consulter-compte/consulter-compte.module').then( m => m.ConsulterComptePageModule),
    canActivate: [GuardGuard]
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
    loadChildren: () => import('./view/a-propos/a-propos.module').then( m => m.AProposPageModule),
    canActivate: [GuardGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
