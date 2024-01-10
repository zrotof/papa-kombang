import { Component, OnInit } from '@angular/core';
import { SecondaryHeroComponent } from 'src/app/shared/components/secondary-hero/secondary-hero.component';
import { SecondaryHero } from 'src/app/core/models/secondary-hero';
import { Accommodation } from 'src/app/core/models/accommodation';
import { AccommodationListComponent } from './components/accommodation-list/accommodation-list.component';
import { PageIntroComponent } from 'src/app/shared/components/page-intro/page-intro.component';
import { NgFor } from '@angular/common';
import { PageIntro } from 'src/app/core/models/page-intro';

@Component({
  selector: 'app-page-accommodations',
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
export class PageAccommodationsComponent implements OnInit {

  heroBannerData !: SecondaryHero ;
  pageIntro !: PageIntro;
  accommodations !: Accommodation[] ;

  ngOnInit(): void {
    this.getHebannerData();
    this.getPageintro();
    this.getAccommodations();
}

  getHebannerData(): void {
    this.heroBannerData = {
      image: "../../../../../../../../assets/img/home/hero-bg.png",
      title: "Logements À Rennes"
    }
  }

  getPageintro() : void {
    this.pageIntro = {
      header : "Où se loger ?",
      paragraphs : [
        "Cette page est dédiée aux recommandations d'hôtels pour votre séjour lors de notre mariage ! Pour faciliter votre recherche, nous vous proposons une liste non exhaustive d'hôtels en fonction de différents critères tels que la proximité de nos lieux de célébration, les installations proposées, et bien sûr, votre budget. Explorez ces options pour trouver l'hébergement qui correspond le mieux à vos besoins, et préparez-vous à vivre un séjour agréable tout en célébrant notre union."
      ]
    }
  }

  getAccommodations() : void {
    this.accommodations = [
      {
        type :"Hôtel 5 ⭐️ ( 2 )",
        list : [
          {
            name: "Château d'Apigné",
            image : "../../../../assets/img/hostels/chateau-apigne.webp",
            descriptions : [
              {
                text : "Situé dans un parc de 25 hectares, cet hôtel raffiné est installé dans un château néo-Renaissance de 1833 doté d'une annexe et de tourelles. Il se trouve à 2 km de la route nationale N24 et à 8 km de la cathédrale de Rennes."
              }
            ],
            distances : [
              {
                label : "Salle de Vendredi",
                distance : 11
              },
              {
                label : "Salle de Samedi",
                distance : 0
              }
            ],
            price : 110,
            link : "https://www.chateau-apigne.fr/"
          },
          {
            name: "Balthazar Hôtel",
            image : "../../../../assets/img/hostels/balthazar.webp",
            descriptions : [
              {
                text : "Situé à 3 minutes à pied de la station de métro la plus proche, cet hôtel haut de gamme se trouve également à 5 minutes de marche du musée des Beaux-Arts de Rennes et à 7 minutes à pied de l'espace des sciences et du planétarium des Champs libres."
              }
            ],
            distances : [
              {
                label : "Salle de Vendredi",
                distance : 2
              },
              {
                label : "Salle de Samedi",
                distance : 9
              }
            ],
            price : 226,
            link : "https://hotel-balthazar.com/"
          }
        ]
      },
      {
        type :"Hôtel 4 ⭐️ ( 4 )",
        list : [
          {
            name: "Hôtel Anne de Bretagne",
            image : "../../../../assets/img/hostels/anne.webp",
            descriptions : [
              {
                text : "Entouré des commerces et des bureaux du centre-ville, cet hôtel animé se trouve à 5 minutes à pied de la place historique de la République et de sa station de métro, ainsi qu'à 9 minutes de marche du musée des Beaux-Arts de Rennes."
              }
            ],
            distances : [
              {
                label : "Salle de Vendredi",
                distance : 2.5
              },
              {
                label : "Salle de Samedi",
                distance : 8.5
              }
            ],
            price : 80,
            link : "https://www.hotel-rennes.com/"
          },
          {
            name: "Novotel Span Rennes Centre Gare",
            image : "../../../../assets/img/hostels/novotel.webp",
            descriptions : [
              {
                text : "Cet hôtel à l'atmosphère décontractée se trouve à 4 minutes à pied de la gare de Rennes et à 7 minutes du musée des Beaux-Arts de la ville. Il est également situé à 9 km du Parc Expo Rennes."
              }
            ],
            distances : [
              {
                label : "Salle de Vendredi",
                distance : 2
              },
              {
                label : "Salle de Samedi",
                distance : 9
              }
            ],
            price : 104,
            link : "https://novotelsparennescentregare.com-hotel.com"
          },
          {
            name: "Mercure - Rennes Centre Parlement",
            image : "../../../../assets/img/hostels/mercure.webp",
            descriptions : [
              {
                text : "Situé à proximité des restaurants du centre-ville, cet hôtel à l'atmosphère moderne et décontractée se trouve à 1 minute à pied d'une station de métro, à 3 minutes du musée des Beaux-Arts et à 9 minutes de la cathédrale de Rennes."
              }
            ],
            distances : [
              {
                label : "Salle de Vendredi",
                distance : 2.1
              },
              {
                label : "Salle de Samedi",
                distance : 9
              }
            ],
            price : 105,
            link : "https://mercurerennescentreparlement.com-hotel.com/"
          },
          {
            name: "Mama Shelter",
            image : "../../../../assets/img/hostels/mama-shelter.webp",
            descriptions : [
              {
                text : "Tous les Mama Shelters sont pensés comme des communautés urbaines à prix modérés, destinées aux nouveaux nomades hyperconnectés, quels que soient leur âge, leurs revenus et leur nationalité. Ce sont des havres de paix, qui allient le confort du « comme à la maison » aux prestations incontournables de l'ère numérique."
              }
            ],
            distances : [
              {
                label : "Salle de Vendredi",
                distance : 4
              },
              {
                label : "Salle de Samedi",
                distance : 9
              }
            ],
            price : 140,
            link: "https://fr.mamashelter.com/"
          }
        ]
      },
      {
        type :"Hôtel 3 ⭐️ ( 5 )",
        list : [
          {
            name: "Le Clos Champel",
            image : "../../../../assets/img/hostels/champel.webp",
            descriptions : [
              {
                text : "Entouré de verdure, cet hôtel de style décontracté se trouve à 2 km de la gare de Cesson-Sévigné et à 9 km du majestueux musée des Beaux-Arts de Rennes datant du XVIIIe siècle."
              }
            ],
            distances : [
              {
                label : "Salle de Vendredi",
                distance : 8
              },
              {
                label : "Salle de Samedi",
                distance : 23
              }
            ],
            price : 46,
            link: "https://www.closchampel.fr/"
          },
          {
            name: "Contact Hôtel Garden",
            image : "../../../../assets/img/hostels/garden.webp",
            descriptions : [
              {
                text : "Situé à 3 minutes à pied du musée des Beaux-Arts de Rennes, cet hôtel élégant est installé dans une maison mitoyenne colorée. Il se trouve à 6 minutes de la station de métro la plus proche et du centre culturel des Champs libres."
              }
            ],
            distances : [
              {
                label : "Salle de Vendredi",
                distance : 1.4
              },
              {
                label : "Salle de Samedi",
                distance : 9.3
              }
            ],
            price : 54,
            link: "https://www.hotel-garden.fr"
          },
          {
            name: "Le Victoria",
            image : "../../../../assets/img/hostels/victoria.webp",
            descriptions : [
              {
                text : "Situé à 3 minutes à pied de la gare de Rennes, cet hôtel-restaurant simple se trouve à 11 minutes du parlement de Bretagne et de la place de la Mairie, dans le centre historique de la ville."
              }
            ],
            distances : [
              {
                label : "Salle de Vendredi",
                distance : 2
              },
              {
                label : "Salle de Samedi",
                distance : 9
              }
            ],
            price : 65,
            link : "https://www.hotel-levictoria.com/fr/"
          },
          {
            name: "L'Ortega",
            image : "../../../../assets/img/hostels/ortega.webp",
            descriptions : [
              {
                text : "Situé à proximité de la route européenne E50, cet hôtel simple se trouve à 3,8 km de l'aéroport de Rennes Saint-Jacques et à 4,9 km de la cathédrale Saint-Pierre dans le centre historique de Rennes."
              }
            ],
            distances : [
              {
                label : "Salle de Vendredi",
                distance : 6
              },
              {
                label : "Salle de Samedi",
                distance : 6.5
              }
            ],
            price : 65,
            link : "https://hotel-ortega-rennes.fr/"
          },
          {
            name: "Mercure - Rennes Centre Parlement",
            image : "../../../../assets/img/hostels/mercure.webp",
            descriptions : [
              {
                text : "Situé à proximité des restaurants du centre-ville, cet hôtel à l'atmosphère moderne et décontractée se trouve à 1 minute à pied d'une station de métro, à 3 minutes du musée des Beaux-Arts et à 9 minutes de la cathédrale de Rennes."
              }
            ],
            distances : [
              {
                label : "Salle de Vendredi",
                distance : 2.1
              },
              {
                label : "Salle de Samedi",
                distance : 9
              }
            ],
            price : 105,
            link : "https://mercurerennescentreparlement.com-hotel.com/"
          }
        ]
      },
      {
        type :"Hôtel 2 ⭐️ ( 4 )",
        list : [
          {
            name: "Hôtel Arcantis",
            image : "../../../../assets/img/hostels/arcantis.webp",
            descriptions : [
              {
                text : "Situé à 1 km de la route nationale N136, cet hôtel sobre se trouve à 3 km de la gare de Rennes et du musée des Beaux-Arts de la ville. Il est à 11 km du vaste parc des Gayeulles."
              }
            ],
            distances : [
              {
                label : "Salle de Vendredi",
                distance : 4.4
              },
              {
                label : "Salle de Samedi",
                distance : 6
              }
            ],
            price : 33,
            link : "https://www.hotel-arcantis-rennes.fr/"
          },
          {
            name: "Le Paris-Brest Hôtel",
            image : "../../../../assets/img/hostels/paris-brest.webp",
            descriptions : [
              {
                text : "Situé en face de la gare de Rennes, cet hôtel moderne se trouve à 14 minutes à pied de la place centrale de la Mairie et du palais du Parlement de Bretagne."
              }
            ],
            distances : [
              {
                label : "Salle de Vendredi",
                distance : 2.1
              },
              {
                label : "Salle de Samedi",
                distance : 9
              }
            ],
            price : 44,
            link : "http://parisbresthotel.com/fr/accueil/"
          },
          {
            name: "Hôtel de la Ta",
            image : "../../../../assets/img/hostels/ta.webp",
            descriptions : [
              {
                text : "Chambres chaleureuses, certaines avec balcon, dans hôtel de style décontracté proposant Wi-Fi gratuit."
              }
            ],
            distances : [
              {
                label : "Salle de Vendredi",
                distance : 3.2
              },
              {
                label : "Salle de Samedi",
                distance : 7.7
              }
            ],
            price : 50,
            link: "https://hoteldelata.com/"
          },
          {
            name: "Hôtel Astrid",
            image : "../../../../assets/img/hostels/astrid.webp",
            descriptions : [
              {
                text : "Situé à 1 minute à pied de la gare de Rennes, cet hôtel sobre se trouve à 6 minutes des Champs Libres, musée et bibliothèque, ainsi qu'à 10 minutes du centre commercial Colombia."
              }
            ],
            distances : [
              {
                label : "Salle de Vendredi",
                distance : 1.9
              },
              {
                label : "Salle de Samedi",
                distance : 9.5
              }
            ],
            price : 68,
            link : "https://www.hotel-astrid-rennes.eu/fr/"
          }
        ]
      }
    ]
  }
}
