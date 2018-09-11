
import { AfterViewInit, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'vr-authenticatedpage',
  templateUrl: './authenticatedpage.component.html',
  styleUrls: ['./authenticatedpage.component.scss']
})
export class AuthenticatedpageComponent implements OnInit {
 
  flag = true;
  constructor(
    private route: Router,
    private afAuth: AngularFireAuth,
    private afDB: AngularFireDatabase,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.flag ?  this.route.navigate(['/authenticatedpage']) :  this.route.navigate(['/login'])
  }

}


