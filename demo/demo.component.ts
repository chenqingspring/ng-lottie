import { Component } from '@angular/core';


@Component({
  selector: 'lottie-animation-view-demo-app',
  template: '<lottie-animation-view [options]="lottieConfig" [width]="300" [height]="600"></lottie-animation-view>'
})
export class DemoComponent {
  public lottieConfig: Object;

  constructor() {
    this.lottieConfig = {
      path: './pinjump.json'
    }
  }
}
