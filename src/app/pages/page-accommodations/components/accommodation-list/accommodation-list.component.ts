import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Accommodation } from 'src/app/core/models/accommodation';
import { TabViewModule } from 'primeng/tabview';
import { AccommodationItemComponent } from '../accommodation-item/accommodation-item.component';

@Component({
  selector: 'app-accommodation-list',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    TabViewModule,
    AccommodationItemComponent
  ],
  templateUrl: './accommodation-list.component.html',
  styleUrls: ['./accommodation-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AccommodationListComponent {
  @Input() obseques !: Accommodation[];
}
