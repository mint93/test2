import { Route } from '@angular/router';
import { JhiLoginComponent } from 'app/account/login/login.component';

export const loginRoute: Route = {
    path: 'login',
    component: JhiLoginComponent,
    data: {
        authorities: [],
        pageTitle: 'login.title',
        animation: 'loginPage'
    }
};
