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
        date: "Vendredi",
        day: "24/05/2024",
        label: "MARIAGE CIVIL"
      },
      {
        date: "Samedi",
        day: "25/05/2024",
        label: "MARIAGE RÉLIGIEUX"
      }
    ]
  }

}
