import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BandFormComponent } from './components/band/band-form/band-form.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'banda/nova', component: BandFormComponent,
  },
  {
    path: 'banda/:id/editar', component: BandFormComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicplayceRoutingModule { }
