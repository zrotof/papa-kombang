import { Component } from '@angular/core';
import { faFaceLaugh } from '@fortawesome/free-solid-svg-icons'
import { faFaceMehBlank, faFaceMeh, faFaceSmile } from '@fortawesome/free-regular-svg-icons'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-starter-module-architecture-V15';

  faFaceSmile = faFaceSmile;
  faFaceMehBlank = faFaceMehBlank;
  faFaceMeh = faFaceMeh;
  faFaceLaugh = faFaceLaugh;
}
