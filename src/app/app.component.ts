import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone : true,
  imports : [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    AOS.init();
  }
}
