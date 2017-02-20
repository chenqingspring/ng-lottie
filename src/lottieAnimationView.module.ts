import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieAnimationViewComponent } from './lottieAnimationView.component';

@NgModule({
  declarations: [
    LottieAnimationViewComponent
  ],
  imports: [CommonModule],
  exports: [LottieAnimationViewComponent]
})
export class LottieAnimationViewModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LottieAnimationViewModule
    };
  }

}
