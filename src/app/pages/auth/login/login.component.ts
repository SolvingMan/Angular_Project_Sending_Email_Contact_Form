import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { CommonService } from '../../../shared/services/common.service';
import { IUser } from '../../../shared/interfaces/user.interface';

import { ROUTE_TRANSITION } from '../../../app.animation';

@Component({
  selector: 'vr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  error = {hasError: false, message: ''};

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private afDB: AngularFireDatabase,
    private commonService: CommonService
  ) { }

  ngOnInit() {
  }

  async login() {
    try {
      this.commonService.setFspl(true);
      await this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password);
      this.router.navigate(['/']);
    } catch (e) {
      this.error = {hasError: true, message: e.message};
    } finally {
      this.commonService.setFspl(false);
    }
  }

  async loginWithSocial(socialType: string) {
    try {
      this.commonService.setFspl(true);
      if (socialType === 'google') {
        await this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      } else {
        await this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
      }
      const currentUser = await this.afAuth.auth.currentUser;

      const db = await this.afDB.object(`users/${currentUser.uid}`).valueChanges().first().toPromise() as IUser;
      this.commonService.storeUserInfo(db);

      if (!db) {
        const user: IUser = {id: currentUser.uid, name: currentUser.displayName, email: currentUser.email, role: 'user'};
        await this.afDB.object(`users/${currentUser.uid}`).set(user);
        this.commonService.storeUserInfo(user);
      }
      this.router.navigate(['/authenticatedpage']);
    } catch (e) {
      this.error = {hasError: true, message: e.message};
    } finally {
      this.commonService.setFspl(false);
    }
  }
}
