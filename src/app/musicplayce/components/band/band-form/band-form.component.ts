import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseResourceFormComponent } from '../../../../core/components/base-form/base-form.component';
import { Band } from 'src/app/musicplayce/models/band.model';
import { BandService } from 'src/app/musicplayce/services/band.service';


@Component({
  selector: 'app-band-form',
  templateUrl: './band-form.component.html',
  styleUrls: ['./band-form.component.scss']
})
export class BandFormComponent extends BaseResourceFormComponent<Band> implements OnInit  {

  constructor(
    protected bandService: BandService,
    protected injector: Injector,
  ) {
    super(injector, bandService, Band.fromJson, new Band());
  }

  btn = {text: '', icon: '' };

  protected creationPageTitle(): string {
    return 'Cadastrar Banda';
  }

  protected editionPageTitle(): string {
    return `Editando Banda: ${this.resource.name || ''}`;
  }


  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      musicStyle: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      originLocal: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      formationAt: [null, [Validators.required]],
    });
  }

  ngOnInit() {
    super.ngOnInit();
    this.currentAction === 'nova'
    ? this.btn = {text: 'Cadastrar Banda', icon: 'group_add'}
    : this.btn = {text: 'Editar Banda', icon: 'create'};
  }

}
