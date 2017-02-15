import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LottieAnimationViewModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, LottieAnimationViewModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}