import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
const bodymovin = require('bodymovin/build/player/bodymovin.js');
export class LottieAnimationViewComponent {
    constructor() {
        this.animCreated = new EventEmitter();
    }
    ngOnInit() {
        this._options = {
            container: this.lavContainer.nativeElement,
            renderer: 'svg',
            loop: this.options.loop !== false,
            autoplay: this.options.autoplay !== false,
            animationData: this.options.animationData,
            path: this.options.path || ''
        };
        this.viewWidth = this.width + 'px' || '100%';
        this.viewHeight = this.height + 'px' || '100%';
        let anim = bodymovin.loadAnimation(this._options);
        this.animCreated.emit(anim);
    }
}
LottieAnimationViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'lottie-animation-view',
                template: `<div #lavContainer 
                    [ngStyle]="{'width': viewWidth, 'height': viewHeight, 'overflow':'hidden', 'margin': '0 auto'}">    
               </div>`
            },] },
];
/** @nocollapse */
LottieAnimationViewComponent.ctorParameters = () => [];
LottieAnimationViewComponent.propDecorators = {
    'options': [{ type: Input },],
    'width': [{ type: Input },],
    'height': [{ type: Input },],
    'animCreated': [{ type: Output },],
    'lavContainer': [{ type: ViewChild, args: ['lavContainer',] },],
};
//# sourceMappingURL=lottieAnimationView.component.js.map