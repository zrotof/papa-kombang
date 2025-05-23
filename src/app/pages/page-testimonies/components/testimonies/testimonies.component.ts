import { Component, Input } from '@angular/core';
import { CommonModule, NgFor, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-testimonies',
  standalone: true,
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.scss'],
  imports: [
    NgFor,
    NgOptimizedImage
  ]
})

export class TestimoniesComponent {
  @Input() testimonies : any
}
