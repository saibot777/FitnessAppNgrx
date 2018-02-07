import {
  MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
  MatInputModule, MatNativeDateModule
} from '@angular/material';
import {NgModule} from "@angular/core";

@NgModule({
    imports: [
      MatButtonModule,
      MatDatepickerModule,
      MatFormFieldModule,
      MatInputModule,
      MatNativeDateModule,
      MatCheckboxModule
    ],
    exports: [
      MatButtonModule,
      MatFormFieldModule,
      MatDatepickerModule,
      MatCheckboxModule,
      MatNativeDateModule,
      MatInputModule
    ],
})
export class MaterialModule { }
