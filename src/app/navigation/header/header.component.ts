import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthService} from "../../core/services/auth.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth: boolean;
  authSubscrioption: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authSubscrioption = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  public onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authSubscrioption.unsubscribe();
  }

}
