import { Component, OnInit } from '@angular/core';
import { DetailsGiftComponent } from './components/details-gift/details-gift.component';
import { SecondaryHeroComponent } from 'src/app/shared/components/secondary-hero/secondary-hero.component';
import { SecondaryHero } from 'src/app/core/models/secondary-hero';
import { GiftWaysComponent } from './components/gift-ways/gift-ways.component';

@Component({
  selector: 'app-page-gift',
  standalone: true,
  imports: [
    DetailsGiftComponent,
    SecondaryHeroComponent,
    GiftWaysComponent
  ],
  templateUrl: './page-gift.component.html',
  styleUrls: ['./page-gift.component.scss']
})

export class PageGiftComponent implements OnInit {

  heroBannerData !: SecondaryHero;
  giftWays : any;

  ngOnInit(): void {
      this.getHebannerData();
      this.initGiftWays();
  }

  getHebannerData(): void {
    this.heroBannerData = {
      image: "../../../../../../../../assets/img/home/hero-bg.jpeg",
      title: "Vous voulez participer?"
    }
  }

  initGiftWays() : void {
    this.giftWays = [
      {
        type : "with-no-link",
        logo : "../../../../../../../../assets/img/gifts/orange-money.png",
        number : "(+237) 6 55 08 84 91"
      },
      {
        type : "with-no-link",
        logo : "../../../../../../../../assets/img/gifts/mobile-money.jpeg",
        number : "(+237) 6 50 34 36 39"
      },
      {
        type : "with-link",
        logo : "../../../../../../../../assets/img/gifts/cb.jpeg",
        link : "https://revolut.me/rosenalbzn",
        linkName : "Dons Par Carte Bancaire"
      },
      {
        type : "with-link",
        logo : "../../../../../../../../assets/img/gifts/paypal.png",
        link : "https://www.paypal.me/nadykombang1",
        linkName : "Dons Par Paypal"
      }
    ]
  }
}
