import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-gift-ways',
  standalone: true,
  imports: [
    NgIf,
    NgFor
  ],
  templateUrl: './gift-ways.component.html',
  styleUrls: ['./gift-ways.component.scss']
})
export class GiftWaysComponent {
  @Input() giftWays : any;
}
