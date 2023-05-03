// component-for-dialog.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {  AnimationEvent } from '@angular/animations';


@Component({
  selector: 'app-component-for-dialog',
  templateUrl: './component-for-dialog.component.html',
  styleUrls: ['./component-for-dialog.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({transform: 'translateX(0)'})),
      state('out', style({transform: 'translateX(100%)'})),
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('500ms')
      ]),
      transition(':leave', [
        animate('500ms', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class ComponentForDialogComponent {
  animationState: 'in' | 'out' = 'in';

  @Output() closeAnimationDone = new EventEmitter<void>();

  onAnimationDone(event: AnimationEvent) {
    console.log('inside onAnimation done.');
    console.table(event);
    if (event.toState === 'void' && event.phaseName === 'done') {
      console.log('Animation has reached done state.');
      this.closeAnimationDone.emit();
    }
  }

  close() {
    this.animationState = 'out';
  }
}
