import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faFaceLaugh } from '@fortawesome/free-solid-svg-icons'
import { faFaceMehBlank, faFaceMeh, faFaceSmile } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone : true,
  imports : [
    RouterOutlet,
    FontAwesomeModule
  ]
})
export class AppComponent {
  title = 'angular-starter-stanfdalone-architecture-V15';

  faFaceSmile = faFaceSmile;
  faFaceMehBlank = faFaceMehBlank;
  faFaceMeh = faFaceMeh;
  faFaceLaugh = faFaceLaugh;
}
