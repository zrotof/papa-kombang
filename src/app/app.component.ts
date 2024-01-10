import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as AOS from 'aos';
import { faFaceLaugh } from '@fortawesome/free-solid-svg-icons'
import { faFaceMehBlank, faFaceMeh, faFaceSmile } from '@fortawesome/free-regular-svg-icons'
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone : true,
  imports : [
    RouterOutlet,
    FontAwesomeModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppComponent implements OnInit {
  title = 'angular-starter-v16-standalone';

  faFaceSmile = faFaceSmile;
  faFaceMehBlank = faFaceMehBlank;
  faFaceMeh = faFaceMeh;
  faFaceLaugh = faFaceLaugh;

  ngOnInit(): void {
    AOS.init();
  }
  
}
