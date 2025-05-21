import { NgFor } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-small-screen',
  templateUrl: './nav-small-screen.component.html',
  styleUrls: ['./nav-small-screen.component.scss'],
  standalone : true,
  imports : [
    NgFor,
    RouterLinkActive,
    RouterLink
  ]
})

export class NavSmallScreenComponent implements OnInit {

  @Output() onNavigationOnSmallScreenEvent = new EventEmitter<boolean>();

  menus !: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.initMenuOnSmallScreen();
  }

  initMenuOnSmallScreen() : void {
    this.menus = [
      {
        label: "Accueil",
        url : ""
      },
      {
        label: "Obsèques",
        url:"/obseques"
      },
      {
        label: "Témoignages",
        url:"/temoignages"
      },
      {
        label: "Galeries",
        url:"/galeries"
      },
      {
        label: "Vos Dons",
        url : "/dons"
      },
      {
        label: "Nous Contacter",
        url : "/contact"
      }
    ]
  }

  onNavigationClicked(){
    this.onNavigationOnSmallScreenEvent.emit(false);
  }

}
