import { Component, OnInit } from '@angular/core';
import { SecondaryHeroComponent } from 'src/app/shared/components/secondary-hero/secondary-hero.component';
import { SecondaryHero } from 'src/app/core/models/secondary-hero';
import { Accommodation } from 'src/app/core/models/accommodation';
import { AccommodationListComponent } from './components/accommodation-list/accommodation-list.component';
import { PageIntroComponent } from 'src/app/shared/components/page-intro/page-intro.component';
import { NgFor } from '@angular/common';
import { PageIntro } from 'src/app/core/models/page-intro';

@Component({
  selector: 'app-page-Obsèques',
  standalone: true,
  imports: [
    NgFor,
    SecondaryHeroComponent,
    PageIntroComponent,
    AccommodationListComponent
  ],
  templateUrl: './page-accommodations.component.html',
  styleUrls: ['./page-accommodations.component.scss']
})
export class PageObsèquesComponent implements OnInit {

  heroBannerData !: SecondaryHero ;
  pageIntro !: PageIntro;
  obseques !: any ;

  ngOnInit(): void {
    this.getHebannerData();
    this.getPageintro();
    this.getObsèques();
}

  getHebannerData(): void {
    this.heroBannerData = {
      image: "../../../../../../../../assets/img/home/hero-bg.jpeg",
      title: "Programme détaillé des obsèques"
    }
  }

  getPageintro() : void {
    this.pageIntro = {
      header : "Comment se passera la derniere semaine avant l'inhumation",
      paragraphs : [
        "Cette page presente un peu plus en détails les déroulé de la semaine du 02 au 07 juin 2025"
      ]
    }
  }

  getObsèques() : void {
    this.obseques = [
      {
        type :"Veillée sans corps ",
        list : [
          {
            name: "Domicile de Japoma à partir de 20h",
            image : "../../../../assets/img/home/douala.jpg",
            descriptions : [
              {
                text : "La journée commence par la levée de corps à la morgue de l’Hôpital Général de Douala, suivie d’un culte bref à la chapelle et d’un cortège funèbre jusqu’au domicile familial à Japuma."
              }
            ],
                        list:[
              "Levée de corps à la morgue",
              "	Culte à la chapelle",
              "Cortège vers Japuma",
            ],
            link : "https://maps.app.goo.gl/wWqd1PfbA5V3tP6w5"
          }
        ]
      },
      {
        type :"Levée de Corps",
        list : [
          {
            name: "A l'hopital general de Douala à partir de 13h",
            image : "../../../../assets/img/home/hopital general.jpeg ",
            descriptions : [
              {
                text : "La journée commence par la levée de corps à la morgue de l’Hôpital Général de Douala, suivie d’un culte bref à la chapelle et d’un cortège funèbre jusqu’au domicile familial à Japuma."
              }
            ],
            list:[
              "	Levée de corps à la morgue ",
              "Culte à la chapelle ",
              "Cortège vers Japuma",
            ],
            link : "https://www.google.fr/maps/place/3Q75%2BQG,+Douala,+Cameroun/@4.0644375,9.7562376,17z/data=!4m13!1m7!3m6!1s0x1061128be2e1fe6d:0x1bcd192f2975d1ed!2s3Q75%2BQG,+Douala,+Cameroun!3b1!8m2!3d4.0644375!4d9.7588125!3m4!1s0x1061128be2e1fe6d:0x1bcd192f2975d1ed!8m2!3d4.0644375!4d9.7588125?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D"
          }
        ]
      },
      {
        type :"Veillée avec corps",
        list : [
          {
            name: "Domicile de Japoma à partir de 20h",
            image : "../../../../assets/img/home/douala.jpg",
            descriptions : [
              {
                text : "Une veillée de recueillement aura lieu dans la soirée, avec des chants, des prières et des témoignages. L’occasion de se rassembler autour du défunt pour un premier hommage intime."
              }
            ],
                        list:[
              "	Culte de veillée ",
              "Partages et témoignages",
              "Circulation autour du cercueil",
            ],
            link: "https://maps.app.goo.gl/wWqd1PfbA5V3tP6w5"
          }
        ]
      },
      {
        type :"Veillée avec corps",
        list : [
          {
            name: "Domicile de Nkoabang à partir de 20h",
            image : "../../../../assets/img/home/Cameroun.jpg",
            descriptions : [
              {
                text : "Après le transfert du corps à Yaoundé, une deuxième veillée se tiendra à Nkoabang, en présence de la famille locale et des proches. Une soirée empreinte de respect, de culture et de foi."
              }
            ],

                        list:[
              "Accueil de la dépouille ",
              "Culte de veillée ",
              "Animations traditionnelles",
            ],
            link : "https://maps.app.goo.gl/H3PcQRTujVUzABBo9"
          }
        ]
      },
            {
        type :"Inhumation à Nkoabang",
        list : [
          {
            name: "Domicile de Nkoabang à partir de 10h",
            image : "../../../../assets/img/home/Cameroun.jpg",
            descriptions : [
              {
                text : "témoignages, et l’inhumation au sein du domicile familial. Un repas fraternel sera ensuite partagé pour clore ces moments d’hommage."
              }
            ],

                        list:[
              " Culte funèbre ",
              " Inhumation ",
              " Repas de clôture  ",
            ],
            link : "https://maps.app.goo.gl/H3PcQRTujVUzABBo9"
          }
        ]
      },
    ]
  }
}
