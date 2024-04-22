import { Directive, Host, Self, Optional, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from "rxjs";
import { MatxSidenavHelperDirective } from './matx-sidenav-helper/matx-sidenav-helper.directive';



@Directive({
  selector: '[MatxSideNavToggle]'
})
export class MatxSideNavToggleDirective implements OnInit, OnDestroy {
  isMobile;
  screenSizeWatcher: Subscription;
  constructor(
    private mediaObserver: MediaObserver,
    @Host() @Self() @Optional() public sideNav: MatxSidenavHelperDirective
  ) {
  }

  ngOnInit() {
    this.initSideNav();
  }

  ngOnDestroy() {
    if(this.screenSizeWatcher) {
      this.screenSizeWatcher.unsubscribe()
    }
  }

  updateSidenav() {
    var self = this;
    setTimeout(() => {
      self.sideNav.opened = !self.isMobile;
      self.sideNav.mode = self.isMobile ? 'over' : 'side';
    })
  }
  initSideNav() {
    this.isMobile = this.mediaObserver.isActive('xs') || this.mediaObserver.isActive('sm');
    this.updateSidenav();
    this.screenSizeWatcher = this.mediaObserver.asObservable()
    .subscribe((change: MediaChange[]) => {
        this.isMobile = (change[0].mqAlias == 'xs') || (change[0].mqAlias == 'sm');
      this.updateSidenav();
    });
  }

}
