import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {NgModule} from "@angular/core";

@NgModule({
    imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatCheckboxModule],
    exports: [MatButtonModule, MatFormFieldModule, MatCheckboxModule, MatInputModule],
})
export class MaterialModule { }
