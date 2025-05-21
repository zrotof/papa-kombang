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
import { GalerieComponent } from './components/galerie/galerie.component';

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
    ReligiousFormComponent,
    GalerieComponent
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
      image: "../../../../../../../../assets/img/home/hero-bg.jpeg",
      title: "Galerie"
    }
  }

  getPageintro() : void {
    this.pageIntro = {
      header : "Scène de vie",
      paragraphs : [
        "Nous partageaons ici la scène de vie de Papa , si vous avez une image de lui, n'hesitez pas à nous contacter"
      ]
    }
  }

  getWeddingCeremonyDetails() : void {
  }
}
