import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { IUser } from '../interfaces/user.interface';
import { LocalStorageService } from 'angular-2-local-storage';
import {environment} from '../../../environments/environment';

@Injectable()
export class CommonService {

  private fullScreenPreLoader = new Subject<boolean>();
  fsplObs$ = this.fullScreenPreLoader.asObservable();

  signUpEmail = '';
  user: IUser = null;

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  setFspl(flag: boolean): void {
    this.fullScreenPreLoader.next(flag);
  }

  storeSignupEmail(email: string) {
    this.signUpEmail = email;
  }

  getSignupEmail(): string {
    return this.signUpEmail;
  }

  storeUserInfo(user: IUser) {
    this.user = user;
    this.localStorageService.set(environment.localStorage.userInfo, JSON.stringify(user));
  }

  getUserInfo(): IUser {
    this.user = JSON.parse(this.localStorageService.get(environment.localStorage.userInfo)) as IUser;
    return this.user;
  }

}
