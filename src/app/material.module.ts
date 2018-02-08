import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule,
  MatInputModule, MatListModule, MatNativeDateModule, MatProgressSpinnerModule, MatSelectModule, MatSidenavModule,
  MatTabsModule, MatToolbarModule
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
      MatProgressSpinnerModule,
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
      MatProgressSpinnerModule,
      MatToolbarModule,
      MatNativeDateModule,
      MatInputModule
    ],
})
export class MaterialModule { }
