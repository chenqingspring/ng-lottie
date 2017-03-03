import { Component } from '@angular/core';

@Component({
  selector: 'lottie-animation-view-demo-app',
  template: ` <lottie-animation-view
                    [options]="lottieConfig"
                    [width]="300"
                    [height]="600"
                    (animCreated)="handleAnimation($event)">
              </lottie-animation-view>
              <div id="player">
                <p>Speed: x{{animationSpeed}}</p>
                <div class="range-container">
                  <input #range type="range" value="1" min="0" max="3" step="0.5"
                    (change)="setSpeed(range.value)">
                </div>
                <button (click)="stop()">stop</button>
                <button (click)="pause()">pause</button>
                <button (click)="play()">play</button>
              </div>`,
  styles: [`
    #player{
       text-align: center;
    }

    .range-container{
      display: flex;
      justify-content: center;
    }

    .range-container input{
      width:200px;
      margin-bottom: 10px;
    }
  `],
})

export class DemoComponent {

  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;

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

  pause() {
    this.anim.pause();
  }

  setSpeed(speed: number) {
    this.animationSpeed = speed;
    this.anim.setSpeed(speed);
  }

}
