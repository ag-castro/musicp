import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-record',
  styleUrls: ['./no-record.component.scss'],
  template: `
    <div class="no-records">
      <mat-icon>{{ icon }}</mat-icon>
      <h3>{{title}}</h3>
    </div>
  `,
})
export class NoRecordComponent {

  @Input() icon: string;
  @Input() title: string;

}
