import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.page.html',
  styleUrls: ['./a-propos.page.scss'],
})
export class AProposPage implements OnInit {
  version = "1.0.1"
  date = "21/04/2022"
  news = "Création du site web"
  
  constructor() { }

  ngOnInit() {
  }

}
