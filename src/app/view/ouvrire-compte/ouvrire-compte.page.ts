import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ouvrire-compte',
  templateUrl: './ouvrire-compte.page.html',
  styleUrls: ['./ouvrire-compte.page.scss'],
})
export class OuvrireComptePage implements OnInit {
  typeCompte = '';
  isCompteJoin = false;

  constructor() { }

  ngOnInit() {
  }

  hideUser(){
    if (this.typeCompte == "join") 
      this.isCompteJoin = true
    else
      this.isCompteJoin = false
  }
}
