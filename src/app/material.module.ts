import {
  MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule,
  MatInputModule, MatListModule, MatNativeDateModule, MatSidenavModule, MatTabsModule, MatToolbarModule
} from '@angular/material';
import {NgModule} from "@angular/core";

@NgModule({
    imports: [
      MatButtonModule,
      MatDatepickerModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatNativeDateModule,
      MatSidenavModule,
      MatListModule,
      MatToolbarModule,
      MatTabsModule,
      MatCheckboxModule
    ],
    exports: [
      MatButtonModule,
      MatFormFieldModule,
      MatIconModule,
      MatDatepickerModule,
      MatListModule,
      MatTabsModule,
      MatCheckboxModule,
      MatSidenavModule,
      MatToolbarModule,
      MatNativeDateModule,
      MatInputModule
    ],
})
export class MaterialModule { }
