import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { CeremonyDetail } from 'src/app/core/models/ceremony-detail';

@Component({
  selector: 'app-wedding-ceremony-details',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './wedding-ceremony-details.component.html',
  styleUrls: ['./wedding-ceremony-details.component.scss']
})
export class WeddingCeremonyDetailsComponent {
  @Input() ceremonies !: CeremonyDetail[]
}
