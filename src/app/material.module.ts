import {
  MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule,
  MatInputModule, MatListModule, MatNativeDateModule, MatSidenavModule, MatToolbarModule
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
      MatCheckboxModule
    ],
    exports: [
      MatButtonModule,
      MatFormFieldModule,
      MatIconModule,
      MatDatepickerModule,
      MatListModule,
      MatCheckboxModule,
      MatSidenavModule,
      MatToolbarModule,
      MatNativeDateModule,
      MatInputModule
    ],
})
export class MaterialModule { }
