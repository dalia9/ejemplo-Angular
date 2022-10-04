import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [],

  exports:[
    MatButtonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule
  ],
  
  imports: [
    CommonModule
  ],
})
export class MaterialModule { }
