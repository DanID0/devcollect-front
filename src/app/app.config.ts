import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';

import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { provideRouter } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';

import { routes } from './app.routes';

import { ssrCookieInterceptor } from './core/interceptors/ssr-cookie.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),

    provideRouter(routes),

    provideHttpClient(withInterceptors([ssrCookieInterceptor])),

    provideClientHydration(),
  ],
};
