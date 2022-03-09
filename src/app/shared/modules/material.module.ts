import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';


export const MODULES = [
  MatDialogModule
];

@NgModule({
  declarations: [],
  imports: [...MODULES],
  exports: [...MODULES],
})
export class MaterialModule {}
