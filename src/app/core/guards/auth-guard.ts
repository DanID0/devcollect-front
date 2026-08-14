import { CanActivateFn, RedirectCommand, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth';
import { ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { map, pipe, catchError, of, tap } from 'rxjs';
export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const router = inject(Router);
  const auth = inject(AuthService);
  const loginPath = router.parseUrl("/login");
  return auth.getUser().pipe(
    map(currentUser => {
      if (currentUser) {
        return true;
  }

  return new  RedirectCommand(loginPath, {skipLocationChange:true});
 }),
 catchError(err => of (new  RedirectCommand(loginPath, {skipLocationChange:true}))
  )
);
  // .subscribe({
  //   next: (user) => {
  //    auth.currentUser.set(user)
  //   },
  //   error: () => {
  //     auth.currentUser.set(null)
  //   }
  // });
  // if (auth.currentUser() != null) {

  // }
  // return true

}
