import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChuckNorrisComponent } from './chuck-norris.component';

@NgModule({
  declarations: [ChuckNorrisComponent],
  imports: [
    CommonModule
  ],
  exports: [ChuckNorrisComponent]
})
export class ChuckNorrisModule { }
