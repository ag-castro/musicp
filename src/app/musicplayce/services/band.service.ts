import { Injectable, Injector } from '@angular/core';
import {BaseResourceService} from './../../core/services/base-resource.service';
import { Band } from './../models/band.model';

@Injectable({
  providedIn: 'root'
})
export class BandService extends BaseResourceService<Band> {

  constructor(
    protected injector: Injector,
  ) {
    super('bands', injector, Band.fromJson);
  }

}
