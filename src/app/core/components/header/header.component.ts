import { Component, ElementRef, HostListener, Inject, Input, OnInit, PLATFORM_ID, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass, NgFor, NgIf, NgStyle, isPlatformBrowser } from '@angular/common';
import { NavSmallScreenComponent } from '../nav-small-screen/nav-small-screen.component';
import { DialogModule } from 'primeng/dialog';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone : true,
  imports : [
    NgStyle,
    NgClass,
    NgIf,
    NgFor,
    RouterLink,
    RouterLinkActive,
    DialogModule,
    MenubarModule,
    NavSmallScreenComponent
  ]
})
export class HeaderComponent implements OnInit {

  @ViewChild('header') header !: ElementRef<HTMLElement>;
  @Input() message !: string | null;
  @Input() backgroundedHeader ?: boolean;
  
  displayMenu: boolean = false;

  onLive  = true;

  menus !: MenuItem[];

  displayMenuItems = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private _renderer : Renderer2,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.initMenu();
    this.onRoutingEvent();
  }

  onShowHideMenuItems(): void{
    this.displayMenuItems = !this.displayMenuItems;
  }

  initMenu(): void{
    this.menus = [
      {
        label: "Accueil",
        url : "",
      },
      {
        label: "Obsèques",
        url:"/obseques",
      },
      {
        label: "Scène de vie",
        icon: "pi-angle-down",
        items : [
          {
            label: "Temoignages",
            url:"/temoignages",
          },
          {
            label: "Galeries",
            url:"/galeries",
          }
        ]
      },
      {
        label: "Contact",
        url : "/contact"
      },
      {
        label: "Vous voulez participer?",
        url : "/dons",
        icon: "pi-gift"
      }
    ]
  }

  //On routing event we, if we are on small screen, we toggle the menu to disapear from the screen after we click on a link
  onRoutingEvent() : void{
    this.router.events.subscribe({
      next : (event) => {
        if(event instanceof ActivationEnd){
          if(event.snapshot.component){
            this.backgroundedHeader = event.snapshot.data['backgrounded']

            if(this.backgroundedHeader){
              this._renderer.addClass(this.header.nativeElement, 'navbar-background-on-scroll');
            }else{
              this._renderer.removeClass(this.header.nativeElement, 'navbar-background-on-scroll');
            }
          }
        }
      }
    })
  }

  menuForSmallScreenHandler(value: boolean) {
    this.displayMenu = false;
  }

  @HostListener('window:scroll')
  onWindowScroll(){

    if(this.backgroundedHeader){
      this._renderer.addClass(this.header.nativeElement, 'navbar-background-on-scroll');
    }
    else{
      if(isPlatformBrowser(this.platformId)){
        if (window.pageYOffset > this.header.nativeElement?.clientHeight) {
          this._renderer.addClass(this.header.nativeElement, 'navbar-background-on-scroll');
        }
        else {
          this._renderer.removeClass(this.header.nativeElement, 'navbar-background-on-scroll');
        }
      }
    }
  }

  //Handling click on burger menu
  onBurgerMenu(){

    if(this.displayMenu === false){
      if (window.pageYOffset <= this.header.nativeElement.clientHeight) {
        this._renderer.addClass(this.header.nativeElement, 'navbar-background-on-scroll');
      }
    }
    else{
      if(!this.backgroundedHeader){
        if(window.pageYOffset <= this.header.nativeElement.clientHeight) {
          this._renderer.removeClass(this.header.nativeElement, 'navbar-background-on-scroll');
        }
      }
    }

    this.displayMenu = !this.displayMenu;
  }
  
}
