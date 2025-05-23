import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SecondaryHeroComponent } from 'src/app/shared/components/secondary-hero/secondary-hero.component';
import { SecondaryHero } from 'src/app/core/models/secondary-hero';
import { PageIntroComponent } from 'src/app/shared/components/page-intro/page-intro.component';
import { PageIntro } from 'src/app/core/models/page-intro';
import { CeremonyDetail } from 'src/app/core/models/ceremony-detail';
import { GalerieComponent } from './components/galerie/galerie.component';

@Component({
  selector: 'app-page-galleries',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    SecondaryHeroComponent,
    PageIntroComponent,
    GalerieComponent
  ],
  templateUrl: './page-galleries.component.html',
  styleUrls: ['./page-galleries.component.scss']
})
export class PageGalleriesComponent implements OnInit {
  
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
