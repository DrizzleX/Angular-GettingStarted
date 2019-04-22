import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpaces } from './convert-to-spaces.pipe';

@NgModule({
  declarations: [
    StarComponent,
    ConvertToSpaces
  ],
  imports: [
    CommonModule, // this provides ngIf, ngFor etc.
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    ConvertToSpaces
  ]
})
export class SharedModule { }
