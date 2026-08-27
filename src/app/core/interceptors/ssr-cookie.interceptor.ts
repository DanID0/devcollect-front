import { HttpInterceptorFn } from '@angular/common/http';
import { inject, REQUEST } from '@angular/core';

export const ssrCookieInterceptor: HttpInterceptorFn = (req, next) => {
  const request = inject(REQUEST);

  if (!request) {
    return next(req);
  }

  if (!req.url.startsWith('http://localhost:3000')) {
    return next(req);
  }

  const cookie = request.headers.get('cookie');

  if (!cookie) {
    return next(req);
  }

  const clonedRequest = req.clone({
    setHeaders: {
      Cookie: cookie,
    },
  });

  return next(clonedRequest);
};
