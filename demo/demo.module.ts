import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LottieAnimationViewModule } from '../src';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LottieAnimationViewModule.forRoot()],
  bootstrap: [AppComponent]
})
export class DemoModule {}
