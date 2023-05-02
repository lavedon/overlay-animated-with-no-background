import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyOverlayService } from './my-overlay.service';
import { ComponentForDialogComponent } from './component-for-dialog/component-for-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentForDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OverlayModule
  ],
  providers: [MyOverlayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
