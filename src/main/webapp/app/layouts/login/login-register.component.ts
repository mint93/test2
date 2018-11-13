import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, NavigationEnd, RouterOutlet } from '@angular/router';

import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

const slideInAnimation =
  trigger('routeAnimations', [
    transition('registerPage => loginPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      // query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ])
      ]),
      // query(':enter', animateChild()),
    ]),
    transition('loginPage => registerPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '100%'})
        ]),
        // query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('300ms ease-out', style({ right: '100%'}))
          ]),
          query(':enter', [
            animate('300ms ease-out', style({ left: '0%'}))
          ])
        ]),
        // query(':enter', animateChild()),
      ])
  ]);

@Component({
    selector: 'jhi-login-register',
    templateUrl: './login-register.component.html',
    animations: [slideInAnimation],
})
export class JhiLoginRegisterComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {
    }

    prepareRoute(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }

}
