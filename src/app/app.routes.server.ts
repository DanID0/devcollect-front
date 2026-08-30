import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'home',
    renderMode: RenderMode.Client,
  },
  {
    path: 'login',
    renderMode: RenderMode.Client,
  },
  {
    path: 'signup',
    renderMode: RenderMode.Client,
  },
  {
    path: 'guides',
    renderMode: RenderMode.Server,
  },
  {
    path: 'profile',
    renderMode: RenderMode.Server,
  },
  {
    path: 'edit-profile',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
