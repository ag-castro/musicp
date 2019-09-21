import { OnInit } from '@angular/core';
import {BaseResourceModel} from '../../models/base-resource.model';
import {BaseResourceService} from '../../services/base-resource.service';


export abstract class BaseResourceListComponent<T extends BaseResourceModel> implements OnInit {

  resources: T[] = [];

  protected constructor(private resourceService: BaseResourceService<T>) { }

  ngOnInit() {
    this.resourceService.getAll().subscribe(
      resources => this.resources = resources.sort((a, b) => b.id - a.id),
      error => alert('Erro ao carregar registros')
    );
  }

  deleteResource(resource: T) {
    const mustDelete = confirm('Deseja realmente excluir esse registro?');
    if (mustDelete) {
      this.resourceService.delete(resource.id).subscribe(
        () => {
          this.resources = this.resources.filter(
            item => item !== resource
          );
          this.ngOnInit();
      },
        () => alert('Erro ao tentar excluir registro')
      );
    }
  }

}
