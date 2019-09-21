import { NgModule } from '@angular/core';
import { MusicplayceRoutingModule } from './musicplayce-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { BandFormComponent } from './components/band/band-form/band-form.component';
import { BandListComponent } from './components/band/band-list/band-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    BandFormComponent,
    BandListComponent,
  ],
  imports: [
    SharedModule,
    MusicplayceRoutingModule
  ]
})
export class MusicplayceModule { }
