import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthService} from "../../core/services/auth.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output() onCloseLink = new EventEmitter<void>();
  isAuth: boolean;
  authSubscrioption: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authSubscrioption = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  public onClose() {
    this.onCloseLink.emit();
  }

  ngOnDestroy() {
    this.authSubscrioption.unsubscribe();
  }

}
