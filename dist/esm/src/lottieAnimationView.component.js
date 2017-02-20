import { Component, Input } from '@angular/core';
var bodymovin = require('bodymovin/build/player/bodymovin.js');
export var LottieAnimationViewComponent = (function () {
    function LottieAnimationViewComponent() {
    }
    LottieAnimationViewComponent.prototype.ngOnInit = function () {
        this._options = {
            container: document.getElementById('lav-container'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: this.options.path || ''
        };
        this.viewWidth = this.width + 'px' || '100%';
        this.viewHeight = this.height + 'px' || '100%';
        bodymovin.loadAnimation(this._options);
    };
    LottieAnimationViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lottie-animation-view',
                    template: "<div id=\"lav-container\" \n                    [ngStyle]=\"{'width': viewWidth, 'height': viewHeight, 'overflow':'hidden', 'margin': '0 auto'}\">    \n               </div>"
                },] },
    ];
    /** @nocollapse */
    LottieAnimationViewComponent.ctorParameters = function () { return []; };
    LottieAnimationViewComponent.propDecorators = {
        'options': [{ type: Input },],
        'width': [{ type: Input },],
        'height': [{ type: Input },],
    };
    return LottieAnimationViewComponent;
}());
//# sourceMappingURL=lottieAnimationView.component.js.map