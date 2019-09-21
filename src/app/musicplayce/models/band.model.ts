import {BaseResourceModel} from './../../core/models/base-resource.model';


export class Band extends BaseResourceModel {

  constructor(
    public id?: number,
    public name?: string,
    public musicStyle?: string,
    public originLocal?: string,
    public formationAt?: string
  ) {
    super();
  }

  static fromJson(jsondata: any): Band {
    return Object.assign(new Band(), jsondata);
  }

}
