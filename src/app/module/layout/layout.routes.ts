import { Routes } from '@angular/router';
import { Layout } from './layout';
import { Dashboard } from '../dashboard/dashboard';
import { Investment } from '../investment/investment';

export default [
    {
        path: '',
        component: Layout,
        children: [
            { path: 'dashboard', component: Dashboard },
            { path: 'investment', component: Investment },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        ],
    },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
] as Routes;
