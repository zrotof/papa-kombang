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
import { AboutHomeComponent } from 'src/app/features/feature-home/pages/page-home/components/about-home/about-home.component';

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
    CivilFormComponent,
    AboutHomeComponent
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
      image: "../../../../../../../../assets/img/home/hero-bg.jpeg",
      title: "Temoignages et anecdotes"
    }
  }

  getPageintro() : void {
    this.pageIntro = {
      header : "💬 Page Témoignages – En mémoire de Papa",
      paragraphs : [
        "Cette page est un espace de souvenirs, d’amour et de reconnaissance. Chaque témoignage ici déposé est une trace vivante de ce que Papa a semé dans nos vies : des sourires, des paroles, des gestes, une présence. Vous y trouverez les mots de ceux qui l’ont connu, aimé, côtoyé chaque message accompagné d’une photo, pour que sa mémoire reste pleine de visages, de voix et de chaleur humaine 🕊️. 👉 Un formulaire simple est également disponible pour permettre à chacun de partager librement un mot, un souvenir, une prière. Parce que chaque lien compte. Chaque mot est précieux."
      ]
    }
  }

  getWeddingCeremonyDetails() : void {
  }
}
