import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { CommonService } from '../../shared/services/common.service';

import { IUser } from '../../shared/interfaces/user.interface';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(
    private afAuth: AngularFireAuth,
    private afDB: AngularFireDatabase,
    private router: Router,
    private commonService: CommonService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    return this.afAuth.authState
      .flatMap(x => {
        const roles = next.data['roles'] as Array<string>;
        const user = this.commonService.getUserInfo();
        if (user) {
          return Observable.of(roles.indexOf(user.role) > -1);
        } else {
          return this.afDB.object(`users/${x.uid}`).valueChanges().first().map((resUser: IUser) => {
            if (resUser) {
              this.commonService.storeUserInfo(resUser);
              return roles.indexOf(user.role) > -1;
            } else {
              return false;
            }
          });
        }
      })
      .do(x => {
        if (!x) {
          this.router.navigate(['/']);
        }
      });
  }
}
