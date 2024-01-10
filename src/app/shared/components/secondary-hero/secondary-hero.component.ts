import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { SecondaryHero } from 'src/app/core/models/secondary-hero';

@Component({
  selector: 'app-secondary-hero',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './secondary-hero.component.html',
  styleUrls: ['./secondary-hero.component.scss']
})
export class SecondaryHeroComponent {

  @Input() heroData !: SecondaryHero;
}
