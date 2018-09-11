import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { CommonService } from '../../../shared/services/common.service';
import { IUser } from '../../../shared/interfaces/user.interface';
import { trigger, transition,state, animate, style } from '@angular/animations';
import { ROUTE_TRANSITION } from '../../../app.animation';
import { EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'vr-loading',
  // templateUrl: './loading1.component.html',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  // animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' },
  animations: [
    ...ROUTE_TRANSITION,
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
    trigger('menuInOut', [
      state('out', style({
        transform: 'translate3d(0, 0, 0)',
      })),
      state('in', style([{
        transform: 'rotate(180deg)',
      }, 
      // getLengthresponsive() == true ? {right: '28%'} : {right:'300px'}
      {right:'28%'}
    ]
    )),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
    trigger('menubackground', [
      state('out', style({
        // transform: 'translate3d(0, 0, 0)',
        // opacity:0.7,
        // backgroundColor:'rgba(255,255,255,0.8)'
        display: 'none'
      })),
      state('in', style([{
        
        // transform: 'translate3d(-100%, 0, 0)',
        background: '#ffffff8e'
      }, 
      // getLengthresponsive() == true ? {right: '28%'} : {right:'300px'}
      // {right:'28%'}
    ]
    )),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ],
  
})
export class LoadingComponent implements OnInit {

  @Output() toggledQuickpanel = new EventEmitter();

  email: string;
  name: string;
  message: string;
  password: string;
  length:0;
  flag = false;
  error = {hasError: false, message: ''};
  visible=false;
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private afDB: AngularFireDatabase,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.visible = false;
  }

  slider() {
    this.visible = !this.visible; 
  }

  Checkvalidation() {
    this.flag ? this.router.navigate(['/login']) : this.router.navigate(['/authenticatedpage']) ;
  }
  toggleQuickpanel() {
    this.toggledQuickpanel.emit();
  }
  menuState:string = 'out';
 
  toggleMenu() {
    this.visible = !this.visible;
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  sendEmailWithCode() {
    console.log(this.name);
    console.log(this.email);
    console.log(this.message);
    let email = this.email
    let name = this.name
    let message = this.message
    let to = "Client <" + 'kittredge.chris.m@gmail.com' + ">";
    let text = "Your access code is " + "code";
    fetch('https://api.smtp2go.com/v3/email/send', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "api_key": "api-CD1539F0A90F11E89DF2F23C91C88F4E",
        "to": [to],
        "sender": "HomeKit <info@Homekit.com>",
        "subject": name, 
        "text_body": "this is text body",
        "html_body": "<h3>" + message + "</h3>"+"<p>"+"from &nbsp;&nbsp;&nbsp;"+ + email+"</p>",
        })
        }).then(function(response) {
        return response.json();
        });
  }

}
