import { Route } from '@angular/router';
import { JhiLoginRegisterComponent } from './login-register.component';
import { loginRoute } from '../../account/login/login.route';
import { registerRoute } from 'app/account';

export const loginRegisterRoute: Route = {
    path: '',
    component: JhiLoginRegisterComponent,
    children: [
        loginRoute,
        registerRoute
    ]
};
