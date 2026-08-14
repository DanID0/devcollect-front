import { CanActivateFn,RedirectCommand, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth';
import { ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { map, of, catchError } from 'rxjs';
export const authPageGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const router = inject(Router);
  const auth = inject(AuthService);

  const guidePath = router.parseUrl("/guides");
  return auth.getUser().pipe(
    map(currentUser => {
      if (currentUser) {
        return new  RedirectCommand(guidePath, {skipLocationChange:true});
  }
  return true
 }),
 catchError(err => of (true)
  )
);
};
