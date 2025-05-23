import { Component, OnInit } from '@angular/core';
import { NgFor, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [
    NgFor,
    NgOptimizedImage
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
        day: "05/06/2025",
        label: "Levée de corps"
      },
      {
        date: "Vendredi",
        day: "06/06/2025",
        label: "Veillée funèbre"
      },
            {
        date: "Samedi",
        day: "07/06/2025",
        label: "Inhumation"
      },
    ]
  }

}
