import { Route } from '@angular/router';
import { JhiLoginModalComponent } from 'app/account/login/login.component';

export const loginRoute: Route = {
    path: 'login',
    component: JhiLoginModalComponent,
    data: {
        authorities: [],
        pageTitle: 'login.title',
        animation: 'loginPage'
    }
};
