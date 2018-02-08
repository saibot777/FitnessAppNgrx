import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule,
  MatInputModule, MatListModule, MatNativeDateModule, MatSelectModule, MatSidenavModule, MatTabsModule, MatToolbarModule
} from '@angular/material';
import {NgModule} from "@angular/core";

@NgModule({
    imports: [
      MatButtonModule,
      MatDatepickerModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatCardModule,
      MatNativeDateModule,
      MatSidenavModule,
      MatListModule,
      MatToolbarModule,
      MatSelectModule,
      MatTabsModule,
      MatCheckboxModule
    ],
    exports: [
      MatButtonModule,
      MatFormFieldModule,
      MatIconModule,
      MatDatepickerModule,
      MatCardModule,
      MatListModule,
      MatTabsModule,
      MatCheckboxModule,
      MatSelectModule,
      MatSidenavModule,
      MatToolbarModule,
      MatNativeDateModule,
      MatInputModule
    ],
})
export class MaterialModule { }
