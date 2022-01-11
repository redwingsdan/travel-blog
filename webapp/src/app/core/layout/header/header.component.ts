import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faUser, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { forkJoin, Subscription } from 'rxjs';
import navData from './nav.data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  user: any;
  faUser = faUser;
  faUserSecret = faUserSecret;
  isMenuOpen = false;
  navData = navData;
  routerSubscription: Subscription;
  apiVersion: string;
  appVersion: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  //  private auth: AuthService
  ) {

    this.route.root.firstChild.data.subscribe(data => {
      this.user = data.user;
    });

  }

  ngOnInit() {
    forkJoin([
      //this.auth.getApiVersion()
    ]).subscribe(results => {
      //this.apiVersion = results[0].version;
      //this.appVersion = environment.version;
    });

    // Automatically close the mobile menu when navigating
    this.routerSubscription = this.router.events.subscribe((event) => {
      this.isMenuOpen = false;
    });

  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

  doLogout() {
    //this.router.navigate(['/login/' ]);
    //this.auth.signout();
  }

  stopImpersonation() {
    //this.auth.stopImpersonation();
  }

  toggleMobileMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  /**
   * This funciton takes the various action types emitted by the nav components and maps them to
   * actual function calls.
   */
  navAction(action: string) {
    switch (action) {
      case 'STOP_IMPERSONATION': {
        this.stopImpersonation();
        break;
      }
      case 'LOG_OUT': {
        this.doLogout();
      }
    }
  }
}
