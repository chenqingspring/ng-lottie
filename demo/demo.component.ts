import { Component } from '@angular/core';

@Component({
  selector: 'lottie-animation-view-demo-app',
  template: '<lottie-animation-view [options]="lottieConfig"></lottie-animation-view>'
})
export class DemoComponent {
  public lottieConfig: Object;

  constructor() {
    this.lottieConfig = {
      path: './pinjump.json'
    }
  }
}
