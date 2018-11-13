import { Route } from '@angular/router';
import { JhiMainComponent } from './main.component';
import { navbarRoute } from 'app/layouts/navbar/navbar.route';
import { HOME_ROUTE } from 'app/home';

export const mainRoute: Route = {
    path: '',
    component: JhiMainComponent,
    children: [
        navbarRoute,
        HOME_ROUTE
    ]
};
