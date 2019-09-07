import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { ChuckNorrisService } from '../services/chuck-norris.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    SplitButtonModule,
    TableModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonModule,
    DropdownModule,
    InputTextModule,
    SplitButtonModule,
    TableModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ChuckNorrisService]
})
export class SharedModule { }
