import { Routes } from '@angular/router';
import { Login } from './module/login/login';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
    {
        path:'login',
        component: Login,
    },
    {
        path: 'secure',
        loadChildren: () => import('./module/layout/layout.routes').then((m) => m.default),
        canActivate: [authGuard],
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: 'login',
    },
];
