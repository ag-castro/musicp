import { NgModule } from '@angular/core';
import { MusicplayceRoutingModule } from './musicplayce-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    SharedModule,
    MusicplayceRoutingModule
  ]
})
export class MusicplayceModule { }
