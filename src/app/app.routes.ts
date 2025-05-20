import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import('./features/feature-home/pages/page-home/page-home.component').then(mod => mod.PageHomeComponent),
    },
    {
        path: "obseques",
        loadComponent: () => import('./features/feature-accommodations/pages/page-accommodations/page-accommodations.component').then(mod => mod.PageObsèquesComponent),
        data: {
            backgrounded : true
        }
    },
    {
        path: "temoignages",
        loadComponent: () => import('./features/feature-confirmation/pages/page-civil-marriage/page-civil-marriage.component').then(mod => mod.PageCivilMarriageComponent),
        data: {
            backgrounded : true
        }
    },
    {
        path: "galeries",
        loadComponent: () => import('./features/feature-confirmation/pages/page-religious-marriage/page-religious-marriage.component').then(mod => mod.PageReligiousMarriageComponent),
        data: {
            backgrounded : true
        }
    },
    {
        path: "contact",
        loadComponent: () => import('./features/feature-contact/pages/page-contact/page-contact.component').then(mod => mod.PageContactComponent),
        data: {
            backgrounded : true
        }
    },
    {
        path: "dons",
        loadComponent: () => import('./features/feature-gifts/pages/page-gift/page-gift.component').then(mod => mod.PageGiftComponent),
        data: {
            backgrounded : true
        }
    }
];