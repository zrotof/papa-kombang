import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SecondaryHeroComponent } from 'src/app/shared/components/secondary-hero/secondary-hero.component';
import { SecondaryHero } from 'src/app/core/models/secondary-hero';
import { ReligiousFormComponent } from './components/religious-form/religious-form.component';
import { PageIntroComponent } from 'src/app/shared/components/page-intro/page-intro.component';
import { PageIntro } from 'src/app/core/models/page-intro';
import { CeremonyDetail } from 'src/app/core/models/ceremony-detail';
import { WeddingCeremonyDetailsComponent } from 'src/app/shared/components/wedding-ceremony-details/wedding-ceremony-details.component';

@Component({
  selector: 'app-page-religious-marriage',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    ReactiveFormsModule,
    SecondaryHeroComponent,
    PageIntroComponent,
    WeddingCeremonyDetailsComponent,
    ReligiousFormComponent
  ],
  templateUrl: './page-religious-marriage.component.html',
  styleUrls: ['./page-religious-marriage.component.scss']
})
export class PageReligiousMarriageComponent implements OnInit {
  
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
      title: "Confirmation : Mariage Réligieux"
    }
  }

  getPageintro() : void {
    this.pageIntro = {
      header : "Déroulement de la journée",
      paragraphs : [
        "Notre week-end enchanteur se poursuivra le samedi 25 mai avec une cérémonie religieuse qui consacrera notre amour, suivie d'une soirée élégante dans le somptueux thème émeraude et or. Rejoignez-nous pour cette journée spéciale où l'amour et la sophistication seront à l'honneur. Le samedi marquera un nouveau chapitre de notre aventure, et nous avons hâte de partager ces moments raffinés et mémorables avec vous."
      ]
    }
  }

  getWeddingCeremonyDetails() : void {
    this.ceremoniesList = [
      {
        header : "Mariage réligieux",
        hour : "13h00 - 14h30",
        address : "20 Château d'Apigné route du, 35650 Le Rheu",
        explanations : "Notre mariage religieux aura lieu dans le magnifique jardin du Château d'Apignée, marquant ainsi la fin de la journée par la bénédiction nuptiale. Un cadre idyllique pour sceller notre amour dans la grâce et la beauté. Nous sommes impatients de partager ce moment unique avec vous."
      },
      {
        header : "Soirée",
        hour : "19h00 - 04h00",
        address : "20 Château d'Apigné route du, 35650 Le Rheu",
        explanations : "Cette magnifique journée serra couronnée d'une soirée dansante.Nous sommes impatients de partager ce moment unique avec vous, entourés de l'éclat du thème émeraude et or qui illuminera cette journée."
      }
    ]
  }
}
