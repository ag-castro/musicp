import { Component, OnInit } from '@angular/core';
import { BaseResourceListComponent } from '../../../../core/components/base-list/base-list.component';
import { Band } from 'src/app/musicplayce/models/band.model';
import { BandService } from 'src/app/musicplayce/services/band.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.scss']
})
export class BandListComponent extends BaseResourceListComponent<Band> implements OnInit {

  constructor(private bandService: BandService, private router: Router) {
    super(bandService);
   }
   bands$: Observable<Band[]>;

   ngOnInit() {
    super.ngOnInit();
    this.bands$ = this.bandService.getAll();
  }

   goToAddBand() {
    this.router.navigate(['/banda/nova']);
   }

   editItem(id: number) {
     this.router.navigate([`/banda/${id}/editar`]);
   }

}
