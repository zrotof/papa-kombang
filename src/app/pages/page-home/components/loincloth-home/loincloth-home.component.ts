import { Component } from '@angular/core';
import { NgFor, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-loincloth-home',
  standalone: true,
  templateUrl: './loincloth-home.component.html',
  styleUrls: ['./loincloth-home.component.scss'],
  imports: [
    NgOptimizedImage,
    NgFor
  ]
})
export class LoinclothHomeComponent {
  protected readonly loincloths = [
    {
      name: "Le t-shirt",
      image: "../../../../../../../assets/img/home/shirt.jpeg",
      price: "5000 fcfa"
    },
    {
      name: "Le Pagne",
      image: "../../../../../../../assets/img/home/hero-bg.jpeg",
      price: "5000 fcfa"
    },
    {
      name: "Le macaron",
      image: "../../../../../../../assets/img/home/macaron.jpeg",
      price: "5000 fcfa"
    }
  ]
}
