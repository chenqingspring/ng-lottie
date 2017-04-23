# Lottie Animation View for Angular ([React](https://github.com/chenqingspring/react-lottie))

[![Build Status](https://travis-ci.org/chenqingspring/ng-lottie.svg?branch=master)](https://travis-ci.org/chenqingspring/ng-lottie)
[![npm version](https://badge.fury.io/js/ng-lottie.svg)](http://badge.fury.io/js/ng-lottie)
[![devDependency Status](https://david-dm.org/chenqingspring/ng-lottie/dev-status.svg)](https://david-dm.org/chenqingspring/ng-lottie?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/chenqingspring/ng-lottie.svg)](https://github.com/chenqingspring/ng-lottie/issues)
[![GitHub stars](https://img.shields.io/github/stars/chenqingspring/ng-lottie.svg)](https://github.com/chenqingspring/ng-lottie/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/chenqingspring/ng-lottie/master/LICENSE)

## Demo
https://chenqingspring.github.io/ng-lottie/demo/

Renamed from ***lottie-angular2*** after angular4 supported

## Why Lottie?

#### Flexible After Effects features
We currently support solids, shape layers, masks, alpha mattes, trim paths, and dash patterns. And we’ll be adding new features on a regular basis.

#### Manipulate your animation any way you like
You can go forward, backward, and — most importantly — you can program your animation to respond to any interaction.

#### Small file sizes
Bundle vector animations within your app without having to worry about multiple dimensions or large file sizes. Alternatively, you can decouple animation files from your app’s code entirely by loading them from a JSON API.

[Learn more](http://airbnb.design/introducing-lottie/) › http://airbnb.design/lottie/

## Installation

Install through npm:
```
npm install --save ng-lottie
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import { LottieAnimationViewModule } from 'ng-lottie';

@NgModule({
  imports: [
    LottieAnimationViewModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import {Component} from '@angular/core';

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
              </div>`
})

export class DemoComponent {

    public lottieConfig: Object;
    private anim: any;
    private animationSpeed: number = 1;

    constructor() {
        this.lottieConfig = {
            path: 'assets/pinjump.json',
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

```

## License

MIT
