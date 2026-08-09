import { Routes } from '@angular/router';

export const routes: Routes = [
{
    path: '',
    loadComponent: () =>
        import('./components/home-page/home-page').then((m)=> m.HomePage)
},
{
    path: 'login',
    loadComponent: () =>
        import('./components/login-page/login-page').then((m)=> m.LoginPage)
},
{
    path: 'signup',
    loadComponent: () =>
        import('./components/signup-page/signup-page').then((m)=> m.SignupPage)
},
{
    path: 'guides',
    loadComponent: () =>
        import('./components/guide-page/guide-page').then((m)=> m.GuidePage)
}
];
