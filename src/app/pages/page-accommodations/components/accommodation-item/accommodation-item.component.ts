import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hostel } from 'src/app/core/models/accommodation';

@Component({
  selector: 'app-accommodation-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accommodation-item.component.html',
  styleUrls: ['./accommodation-item.component.scss']
})
export class AccommodationItemComponent {
  @Input() accommodation !: any;
}
