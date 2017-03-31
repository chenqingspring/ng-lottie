import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
var bodymovin = require('bodymovin/build/player/bodymovin.js');
export var LottieAnimationViewComponent = (function () {
    function LottieAnimationViewComponent() {
        this.animCreated = new EventEmitter();
    }
    LottieAnimationViewComponent.prototype.ngOnInit = function () {
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
        var anim = bodymovin.loadAnimation(this._options);
        this.animCreated.emit(anim);
    };
    LottieAnimationViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lottie-animation-view',
                    template: "<div #lavContainer \n                    [ngStyle]=\"{'width': viewWidth, 'height': viewHeight, 'overflow':'hidden', 'margin': '0 auto'}\">    \n               </div>"
                },] },
    ];
    /** @nocollapse */
    LottieAnimationViewComponent.ctorParameters = function () { return []; };
    LottieAnimationViewComponent.propDecorators = {
        'options': [{ type: Input },],
        'width': [{ type: Input },],
        'height': [{ type: Input },],
        'animCreated': [{ type: Output },],
        'lavContainer': [{ type: ViewChild, args: ['lavContainer',] },],
    };
    return LottieAnimationViewComponent;
}());
//# sourceMappingURL=lottieAnimationView.component.js.map