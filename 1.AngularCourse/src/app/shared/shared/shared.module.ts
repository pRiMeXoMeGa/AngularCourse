import { FormsModule } from '@angular/forms';
import { StarComponent } from './../../star/star.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from 'src/app/filter/filter.component';



@NgModule({
  declarations: [
    StarComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    StarComponent,
    FilterComponent
  ]
})
export class SharedModule { }
