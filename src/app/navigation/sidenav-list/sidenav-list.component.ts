import {
  Component,
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../../main.reducer';
import { AuthService } from '../../auth/auth.service';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();
  isAuth$: Observable<boolean>;

  constructor(private authService: AuthService, private store: Store<fromApp.State>) {}

  ngOnInit() {
    this.isAuth$ = this.store.select(fromApp.getIsAuth);
  }

  onClose() {
    this.closeSidenav.emit();
  }

  onLogout() {
    this.onClose();
    this.authService.logout();
  }
}
