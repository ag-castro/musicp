import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatFormFieldModule, MatChipsModule, MatSnackBarModule,
  MatInputModule, MatListModule, MatToolbarModule, MatMenuModule, MatProgressSpinnerModule } from '@angular/material';
import { HeaderToolBarComponent } from './components/header-tool-bar/header-tool-bar.component';
import { NoRecordComponent } from './components/no-record/no-record.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';


@NgModule({
  declarations: [HeaderToolBarComponent, NoRecordComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,

    HeaderToolBarComponent,
    NoRecordComponent
  ],

})
export class SharedModule { }
