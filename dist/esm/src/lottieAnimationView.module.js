import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieAnimationViewComponent } from './lottieAnimationView.component';
export class LottieAnimationViewModule {
    static forRoot() {
        return {
            ngModule: LottieAnimationViewModule
        };
    }
}
LottieAnimationViewModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    LottieAnimationViewComponent
                ],
                imports: [CommonModule],
                exports: [LottieAnimationViewComponent]
            },] },
];
/** @nocollapse */
LottieAnimationViewModule.ctorParameters = () => [];
//# sourceMappingURL=lottieAnimationView.module.js.map