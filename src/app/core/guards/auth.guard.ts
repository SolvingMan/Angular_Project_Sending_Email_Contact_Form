import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {

    return this.afAuth.authState
      .map(x => !!x)
      .do(authenticated => {
        if (!authenticated) {
          this.router.navigate(['/login']);
        }
      });

  }
}
