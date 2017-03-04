import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
declare let require: any;
const bodymovin: any = require('bodymovin/build/player/bodymovin.js');

@Component({
    selector: 'lottie-animation-view',
    template: `<div #lavContainer 
                    [ngStyle]="{'width': viewWidth, 'height': viewHeight, 'overflow':'hidden', 'margin': '0 auto'}">    
               </div>`
})

export class LottieAnimationViewComponent implements OnInit {
    @Input() options: any;
    @Input() width: number;
    @Input() height: number;

    @Output() animCreated: any = new EventEmitter();

    @ViewChild('lavContainer') lavContainer: any;

    private _options: any;
    private viewWidth: string;
    private viewHeight: string;

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

        let anim: any = bodymovin.loadAnimation(this._options);
        this.animCreated.emit(anim);
    }
}
