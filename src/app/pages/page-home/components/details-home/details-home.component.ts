import { NgClass, NgFor, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details-home',
  standalone: true,
  imports: [ 
    NgFor,
    NgClass,
    NgOptimizedImage,
    RouterLink,
   ],
  templateUrl: './details-home.component.html',
  styleUrls: ['./details-home.component.scss']
})
export class DetailsHomeComponent {

  ceremonies = [
    {
      date: "05 Juin 2025",
      image: "../../../../../../../assets/img/home/hopital general.jpeg",
      title: "Levée de corps à l'hopital géneral de douala",
      description: "La journée du jeudi marque le début des cérémonies, avec la levée de corps à l’hôpital général de Douala, suivie d’un cortège vers la maison familiale à Japuma.",
      link: "obseques"
    },
    {
      date: "05 Juin 2025",
      image: "../../../../../../../assets/img/home/douala.jpg",
      title: "Veillée à son domicile de Japoma",
      description: "Ce moment marque le début officiel des cérémonies. Famille et proches se rassemblent à l’Hôpital Général de Douala pour accompagner Papa dans sa dernière sortie de la morgue, dans le respect, la foi et l’émotion. La journée se poursuivra avec un culte d’adieu à la chapelle, puis un cortège funèbre jusqu’à Japuma, où débutera la veillée.",
      link: "obseques"
    },
    {
      date: "06 Juin 2025",
      image: "../../../../../../../assets/img/home/Cameroun.jpg",
      title: "Veillée à son domicile de Nkoabang",
      description: "Transfert du corps vers Yaoundé dans la matinée. À Nkoabang, une seconde veillée de prière et de recueillement est prévue dans la soirée, avec témoignages, chants et prédication.",
      link: "obseques"
    },
    {
      date: "07 Juin 2025",
      image: "../../../../../../../assets/img/home/Cameroun.jpg",
      title: "Inhumation à son domicile de Nkoabang",
      description: "Culte & Inhumation Journée d’hommage final et d’inhumation à Nkoabang. Culte solennel, chants, repas fraternel. La cérémonie se terminera par la mise en terre de Papa dans la strite intimité familiale.",
      link: "obseques"
    }
  ]
}
