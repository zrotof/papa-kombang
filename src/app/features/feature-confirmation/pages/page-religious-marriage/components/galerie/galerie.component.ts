import { isPlatformBrowser, NgFor, NgOptimizedImage } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.scss'],
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgFor
  ]
})

export class GalerieComponent {

  constructor( @Inject(PLATFORM_ID) private platformId : Object){}

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
      AOS.refresh();
    }
  }
  
  galeries = [
"../../../../../../../assets/img/gallery/1.jpg",
"../../../../../../../assets/img/gallery/2.jpeg",
"../../../../../../../assets/img/gallery/3.jpeg",
"../../../../../../../assets/img/gallery/4.jpeg",
"../../../../../../../assets/img/gallery/5.jpeg",
"../../../../../../../assets/img/gallery/6.jpeg",
"../../../../../../../assets/img/gallery/7.jpeg",
"../../../../../../../assets/img/gallery/8.jpeg",
"../../../../../../../assets/img/gallery/9.jpeg",
"../../../../../../../assets/img/gallery/10.jpeg",
"../../../../../../../assets/img/gallery/11.jpeg",
"../../../../../../../assets/img/gallery/12.jpeg",
"../../../../../../../assets/img/gallery/13.jpeg",
"../../../../../../../assets/img/gallery/14.jpeg",
"../../../../../../../assets/img/gallery/15.jpeg",
"../../../../../../../assets/img/gallery/16.jpeg",
"../../../../../../../assets/img/gallery/17.jpeg",
"../../../../../../../assets/img/gallery/18.jpeg",
"../../../../../../../assets/img/gallery/19.jpeg",
"../../../../../../../assets/img/gallery/20.jpeg",
"../../../../../../../assets/img/gallery/21.jpeg",
"../../../../../../../assets/img/gallery/22.jpeg",
"../../../../../../../assets/img/gallery/23.jpeg",
"../../../../../../../assets/img/gallery/24.jpeg",
"../../../../../../../assets/img/gallery/25.jpeg",
"../../../../../../../assets/img/gallery/26.jpeg",
"../../../../../../../assets/img/gallery/27.jpeg",
"../../../../../../../assets/img/gallery/28.jpeg",
"../../../../../../../assets/img/gallery/29.jpeg",
"../../../../../../../assets/img/gallery/34.jpeg",
"../../../../../../../assets/img/gallery/35.jpeg",
"../../../../../../../assets/img/gallery/36.jpeg",
"../../../../../../../assets/img/gallery/37.jpeg"
  ]

}
