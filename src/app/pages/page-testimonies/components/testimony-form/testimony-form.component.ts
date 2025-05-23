import { Component, ViewEncapsulation } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-testimony-form',
  standalone: true,
  imports: [NgIf],
  templateUrl: './testimony-form.component.html',
  styleUrls: ['./testimony-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class TestimonyFormComponent {
  formSubmitted = false;

  handleSubmit(): void {
    setTimeout(() => {
      this.formSubmitted = true;
    }, 1000);
  }
}
