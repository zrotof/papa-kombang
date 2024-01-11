import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.scss']
})
export class PageContactComponent implements OnInit {

  contactWays : any;

  ngOnInit(): void {
    this.initContactWays();
  }

  initContactWays() : void {
    this.contactWays = [
      {
        icon : "pi pi-phone",
        value : "06 12 73 92 46"
      },
      {
        icon : "pi pi-envelope",
        value : "messages@nadia-et-samuel.fr"
      }
    ]
  }
}
