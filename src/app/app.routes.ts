import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import('./pages/page-home/page-home.component').then(mod => mod.PageHomeComponent),
    },
    {
        path: "obseques",
        loadComponent: () => import('./pages/page-accommodations/page-accommodations.component').then(mod => mod.PageObsèquesComponent),
        data: {
            backgrounded : true
        }
    },
    {
        path: "temoignages",
        loadComponent: () => import('./pages/page-testimonies/page-testimonies.component').then(mod => mod.PageTestimoniesComponent),
        data: {
            backgrounded : true
        }
    },
    {
        path: "galeries",
        loadComponent: () => import('./pages/page-galleries/page-galleries.component').then(mod => mod.PageGalleriesComponent),
        data: {
            backgrounded : true
        }
    },
    {
        path: "contact",
        loadComponent: () => import('./pages/page-contact/page-contact.component').then(mod => mod.PageContactComponent),
        data: {
            backgrounded : true
        }
    },
    {
        path: "dons",
        loadComponent: () => import('./pages/page-gift/page-gift.component').then(mod => mod.PageGiftComponent),
        data: {
            backgrounded : true
        }
    }
];