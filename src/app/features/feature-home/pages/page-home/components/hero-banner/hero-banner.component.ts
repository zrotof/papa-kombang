import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss']
})
export class HeroBannerComponent implements OnInit {
  
  dates : any;

  ngOnInit(): void {
    this.initDates();
  }

  initDates() : void {
    this.dates = [
      {
        date: "Jeudi",
        day: "05/05/2025",
        label: "levée de corps"
      },
      {
        date: "Vendredi",
        day: "06/05/2025",
        label: "Veillée"
      },
            {
        date: "Samedi",
        day: "07/05/2025",
        label: "Inhumation"
      },
    ]
  }

}
