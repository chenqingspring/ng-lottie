import { Component } from '@angular/core';

@Component({
  selector: 'lottie-animation-view-demo-app',
  template: `<lottie-animation-view 
                    [options]="lottieConfig" 
                    [width]="300" 
                    [height]="600" 
                    (animCreated)="handleAnimation($event)">
              </lottie-animation-view>
            <div style="text-align: center"><button (click)="stop()">stop</button> <button (click)="play()">play</button></div>`
})

export class DemoComponent {

  public lottieConfig: Object;
  private anim: any;

  constructor() {
    this.lottieConfig = {
      path: './pinjump.json',
      autoplay: true,
      loop: true
    };
  }

  handleAnimation(anim: any) {
    this.anim = anim;
  }

  stop() {
    this.anim.stop();
  }

  play() {
    this.anim.play();
  }

}
