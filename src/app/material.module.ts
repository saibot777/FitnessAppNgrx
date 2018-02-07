import {
  MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule,
  MatInputModule, MatNativeDateModule, MatSidenavModule, MatToolbarModule
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
      MatToolbarModule,
      MatCheckboxModule
    ],
    exports: [
      MatButtonModule,
      MatFormFieldModule,
      MatIconModule,
      MatDatepickerModule,
      MatCheckboxModule,
      MatSidenavModule,
      MatToolbarModule,
      MatNativeDateModule,
      MatInputModule
    ],
})
export class MaterialModule { }
