import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ToolbarModule } from 'primeng/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';
import { SharedModule } from '../shared/shared.module';
import { ChuckNorrisComponent } from '../chuck-norris/chuck-norris.component';

const routes: Routes = [
  {
    path: '', component: MenuComponent, children: [
      { path: 'chuck-norris', component: ChuckNorrisComponent }
    ]
  }
];

@NgModule({
  declarations: [MenuComponent, ChuckNorrisComponent],
  imports: [
    CommonModule,
    PanelMenuModule,
    ToolbarModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    PanelMenuModule,
    ToolbarModule,
    SharedModule
  ]
})
export class MenuModule { }
