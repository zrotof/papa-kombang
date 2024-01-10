import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import('./features/feature-home/pages/page-home/page-home.component').then(mod => mod.PageHomeComponent),
    },
    {
        path: "accommodations",
        loadComponent: () => import('./features/feature-accommodations/pages/page-accommodations/page-accommodations.component').then(mod => mod.PageAccommodationsComponent),
        data: {
            backgrounded : true
        }
    },
    {
        path: "confirmation-mariage-civil",
        loadComponent: () => import('./features/feature-confirmation/pages/page-civil-marriage/page-civil-marriage.component').then(mod => mod.PageCivilMarriageComponent),
        data: {
            backgrounded : true
        }
    },
    {
        path: "confirmation-mariage-religieux",
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
        path: "vos-cadeaux",
        loadComponent: () => import('./features/feature-gifts/pages/page-gift/page-gift.component').then(mod => mod.PageGiftComponent),
        data: {
            backgrounded : true
        }
    }
];