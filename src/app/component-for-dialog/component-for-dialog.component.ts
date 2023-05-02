import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-component-for-dialog',
  templateUrl: './component-for-dialog.component.html',
  styleUrls: ['./component-for-dialog.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition(':leave', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]})
export class ComponentForDialogComponent {

}
