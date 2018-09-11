import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { ROUTE_TRANSITION } from '../../../app.animation';
import { CommonService } from '../../../shared/services/common.service';
import { IUser } from '../../../shared/interfaces/user.interface';

@Component({
  selector: 'vr-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class RegisterComponent implements OnInit {

  name: string;
  email: string;
  password: string;
  passwordConfirm: string;

  error = {hasError: false, message: ''};

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private afDB: AngularFireDatabase,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.email = this.commonService.getSignupEmail();
  }

  async register() {
    if (this.password === this.passwordConfirm) {
      try {
        this.commonService.setFspl(true);
        await this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password);
        await this.afAuth.auth.currentUser.sendEmailVerification();
        const uid = await this.afAuth.auth.currentUser.uid;
        const user: IUser = {id: uid, name: this.name, email: this.email, role: 'user'};

        await this.afDB.object(`users/${uid}`).set(user);
        this.commonService.storeUserInfo(user);
        this.router.navigate(['/']);
      } catch (e) {
        this.error = {hasError: true, message: e.message};
      } finally {
        this.commonService.setFspl(false);
      }
    } else {
      this.error = {hasError: true, message: 'Password does not match.'};
    }
  }

}
