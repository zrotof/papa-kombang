import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { PageIntro } from 'src/app/core/models/page-intro';

@Component({
  selector: 'app-page-intro',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './page-intro.component.html',
  styleUrls: ['./page-intro.component.scss']
})
export class PageIntroComponent {

  @Input() intro !: PageIntro
}
