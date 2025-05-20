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
        label: "Confirmation Mariage Civil",
        url:"/temoignages"
      },
      {
        label: "Confirmation Mariage Réligieux",
        url:"/galeries"
      },
      {
        label: "Vos Cadeaux",
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
