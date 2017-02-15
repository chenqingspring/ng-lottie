import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { lottieAnimationViewComponent } from './lottieAnimationView.component';

@NgModule({
  declarations: [
    lottieAnimationViewComponent
  ],
  imports: [CommonModule],
  exports: [lottieAnimationViewComponent]
})
export class LottieAnimationViewModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LottieAnimationViewModule
    };
  }

}
