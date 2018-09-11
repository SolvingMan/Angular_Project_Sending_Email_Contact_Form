import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { ROUTE_TRANSITION } from '../../../app.animation';
import { CommonService } from '../../../shared/services/common.service';
import { IUser } from '../../../shared/interfaces/user.interface';

@Component({
  selector: 'vr-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class SignupComponent implements OnInit {

  email: string;

  error = {hasError: false, message: ''};

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private afDB: AngularFireDatabase,
    private commonService: CommonService
  ) { }

  ngOnInit() {
  }

  signUp() {
    this.commonService.storeSignupEmail(this.email);
    this.router.navigate(['/register/detail']);
  }

  async signUpWithSocial(socialType: string) {
    try {
      this.commonService.setFspl(true);
      if (socialType === 'google') {
        await this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      } else {
        await this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
      }
      const currentUser = await this.afAuth.auth.currentUser;
      const user: IUser = {id: currentUser.uid, name: currentUser.displayName, email: currentUser.email, role: 'user'};

      await this.afDB.object(`users/${currentUser.uid}`).set(user);
      this.commonService.storeUserInfo(user);
      this.router.navigate(['/']);
    } catch (e) {
      this.error = {hasError: true, message: e.message};
    } finally {
      this.commonService.setFspl(false);
    }
  }
}
