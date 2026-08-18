import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';
import { authPageGuard } from './core/guards/auth-page-guard';
import { HeaderBase } from './shared/header-base/header-base';
export const routes: Routes = [

{
    path: '',
    loadComponent: () =>
        import('./components/home-page/home-page').then((m)=> m.HomePage),
    canActivate: [authPageGuard]
},
{
    path: 'login',
    loadComponent: () =>
        import('./components/login-page/login-page').then((m)=> m.LoginPage),
    canActivate: [authPageGuard]
    
},
{
    path: 'signup',
    loadComponent: () =>
        import('./components/signup-page/signup-page').then((m)=> m.SignupPage),
    canActivate: [authPageGuard]
},
{
    path: '',
    component: HeaderBase,
    canActivate: [authGuard],
    children:[
        {
            path: 'profile',
            loadComponent:() => 
                import('./components/profile-page/profile-page').then((m) => m.ProfilePage),
        },
        {
            path: 'edit-profile',
            loadComponent:() => 
                import('./components/profile-settings/profile-settings').then((m) => m.ProfileSettings),
        },
        {
            path: 'guides',
            loadComponent: () =>
                import('./components/guide-page/guide-page').then((m)=> m.GuidePage),
        
        },

    ]
},
{
    path: '**',
    loadComponent: () =>
        import('./components/error-page/error-page').then((m)=> m.ErrorPage)
}

];
