import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { SecondaryHero } from 'src/app/core/models/secondary-hero';
import { ReactiveFormsModule } from '@angular/forms';
import { SecondaryHeroComponent } from 'src/app/shared/components/secondary-hero/secondary-hero.component';
import { CivilFormComponent } from './components/civil-form/civil-form.component';
import { CeremonyDetail } from 'src/app/core/models/ceremony-detail';
import { PageIntro } from 'src/app/core/models/page-intro';
import { WeddingCeremonyDetailsComponent } from 'src/app/shared/components/wedding-ceremony-details/wedding-ceremony-details.component';
import { PageIntroComponent } from 'src/app/shared/components/page-intro/page-intro.component';

@Component({
  selector: 'app-page-civil-marriage',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    ReactiveFormsModule,
    SecondaryHeroComponent,
    PageIntroComponent,
    WeddingCeremonyDetailsComponent,
    CivilFormComponent
  ],
  templateUrl: './page-civil-marriage.component.html',
  styleUrls: ['./page-civil-marriage.component.scss']
})
export class PageCivilMarriageComponent implements OnInit {

  heroBannerData !: SecondaryHero;
  pageIntro !: PageIntro;
  ceremoniesList !: CeremonyDetail[];

  ngOnInit(): void {
      this.getHebannerData();
      this.getPageintro();
      this.getWeddingCeremonyDetails();
  }

  getHebannerData(): void {
    this.heroBannerData = {
      image: "../../../../../../../../assets/img/home/hero-bg.png",
      title: "Confirmation : Mariage Civil"
    }
  }

  getPageintro() : void {
    this.pageIntro = {
      header : "Déroulement de la journée",
      paragraphs : [
        "Notre week-end magique débutera le vendredi 24 mai par une cérémonie civile qui scellera notre union, suivie d'une soirée festive. Rejoignez-nous pour ce moment spécial, où l'amour et la célébration seront à l'honneur. La journée du vendredi marquera le commencement de notre aventure, et nous sommes impatients de partager ces moments mémorables avec vous."
      ]
    }
  }

  getWeddingCeremonyDetails() : void {
    this.ceremoniesList = [
      {
        header : "Mariage à la Mairie",
        hour : "15h00 - 15h15",
        address : "Pl. de la Mairie, 35000 Rennes",
        explanations : "Le mariage à la mairie débutera à 14h00 précises à la mairie de Rennes. Nous serions ravis de vous avoir à nos côtés pour partager ce moment clé qui lancera notre week-end de célébration."
      },
      {
        header : "Vin d'honneur",
        hour : "16h00 - 06h00",
        address : "4 All. Georges Palante, 35000 Rennes",
        explanations : "La petite soirée traditionnelle débutera après la cérémonie à la mairie. Elle sera imprégnée d'un thème traditionnel, et nous vous encourageons à revêtir un pagne choisi par l'une des familles et à arborer votre meilleure tenue."
      }
    ]
  }
}
