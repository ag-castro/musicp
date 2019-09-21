import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatIconModule,
  MatListModule, MatToolbarModule, MatMenuModule } from '@angular/material';
import { HeaderToolBarComponent } from './components/header-tool-bar/header-tool-bar.component';
import { NoRecordComponent } from './components/no-record/no-record.component';


@NgModule({
  declarations: [HeaderToolBarComponent, NoRecordComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,

    HeaderToolBarComponent,
    NoRecordComponent
  ],

})
export class SharedModule { }
