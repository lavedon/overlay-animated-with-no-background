import { Injectable } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentForDialogComponent } from './component-for-dialog/component-for-dialog.component';
import { OverlayConfig }  from '@angular/cdk/overlay';
import { MyOverlayRef } from 'my-overlay-ref';


interface DialogConfig {
  hasBackdrop?: boolean;
  panelClass?: string;
}

const DEFAULT_CONFIG: DialogConfig = {
  hasBackdrop: true,
  panelClass: 'dialog-panel'
}

@Injectable({
  providedIn: 'root'
})
export class MyOverlayService {

  constructor(private overlay: Overlay) { }

  open(config: DialogConfig = {}) {
    const overlayPortal = new ComponentPortal(ComponentForDialogComponent)
    const dialogConfig = {...DEFAULT_CONFIG, ...config};
    const overlayRef = this.createOverlay(dialogConfig);

    overlayRef.attach(overlayPortal);

    const dialogRef = new MyOverlayRef(overlayRef);

    overlayRef.backdropClick().subscribe(() => dialogRef.close());
    return dialogRef;
  }

  private getOverlayConfig(config: DialogConfig): OverlayConfig {
    const positionStrategy = this.overlay.position().
      global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    return overlayConfig;
    }

    private createOverlay(config: DialogConfig) {
      const overlayConfig = this.getOverlayConfig(config);
      return this.overlay.create(overlayConfig);
    }



}
