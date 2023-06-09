import { Component } from '@angular/core';
import { MyOverlayService } from './my-overlay.service';
import { MyOverlayRef } from 'my-overlay-ref';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'slide-in-out-WITH-cdk';

  constructor(private myOverlayService: MyOverlayService) {}

  showOverlay() {
    this.myOverlayService.open();

  }
}
