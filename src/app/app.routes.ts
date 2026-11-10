import { Routes } from '@angular/router';
import { authGuard, guestGuard } from './guards/auth-guard';


export const routes: Routes = [
    {
        path: 'login',
        canActivate: [guestGuard],
        loadComponent: () => import('./pages/login/login').then((m) => m.Login),
    },
    {
        // Todo lo que cuelgue de acá queda protegido
        path: '',
        canActivateChild: [authGuard],
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'home' },
            {
                path: 'home',
                loadComponent: () => import('./pages/products/products').then((m) => m.Products),
            },
            // { path: 'otra-ruta', loadComponent: () => import(...) },
        ],
    },
    {
        path: 'cotizacion',
        loadComponent: () => import('./pages/cotizacion/cotizacion').then((m) => m.Cotizacion),
    },
    { path: '**', redirectTo: 'login' },
];