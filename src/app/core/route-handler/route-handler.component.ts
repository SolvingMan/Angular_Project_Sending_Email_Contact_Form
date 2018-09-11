import { Component, OnInit } from '@angular/core';
import * as fromRoot from '../../reducers/index';
import { Store } from '@ngrx/store';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'vr-route-handler',
  templateUrl: './route-handler.component.html',
  styleUrls: ['./route-handler.component.scss']
})
export class RouteHandlerComponent implements OnInit {

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Set Sidenav Currently Open on Page load
  
    // You can use ?layout=beta to load the page with Layout Beta as default
    // Same with ?elevation=5 (anything from 0 to 24)


    // Define Menu Items here

    // Top Level Item (The item to click on so the dropdown opens)
  
    // Sub Items for the Top Level Item (The items shown when you clicked on the dropdown item)
    // Note: The Top Level Item is added as "parent" in those items, here "dashboard" (variable from above)


    // Push the just created Sub Items into the Top Level Item


    
  }

}
