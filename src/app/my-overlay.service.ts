import { Injectable } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentForDialogComponent } from './component-for-dialog/component-for-dialog.component';



@Injectable({
  providedIn: 'root'
})
export class MyOverlayService {

  constructor(private overlay: Overlay) { }

  open() {
    const overlayRef = this.overlay.create();

    const overlayPortal = new ComponentPortal(ComponentForDialogComponent)
    overlayRef.attach(overlayPortal);
  }

}
