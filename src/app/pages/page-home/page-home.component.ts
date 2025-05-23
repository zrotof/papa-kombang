import { Component } from '@angular/core';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { CounterEventComponent } from './components/counter-event/counter-event.component';
import { DetailsHomeComponent } from './components/details-home/details-home.component';
import { RingsDividerHomeComponent } from './components/rings-divider-home/rings-divider-home.component';
import { LoinclothHomeComponent } from './components/loincloth-home/loincloth-home.component';

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [
    HeroBannerComponent,
    CounterEventComponent,
    DetailsHomeComponent,
    RingsDividerHomeComponent,
    LoinclothHomeComponent
  ],
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent {

}
