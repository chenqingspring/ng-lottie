# lottie animation view for angular2
[![Build Status](https://travis-ci.org/chenqingspring/lottie-angular2.svg?branch=master)](https://travis-ci.org/chenqingspring/lottie-angular2)
[![npm version](https://badge.fury.io/js/lottie-angular2.svg)](http://badge.fury.io/js/lottie-angular2)
[![devDependency Status](https://david-dm.org/chenqingspring/lottie-angular2/dev-status.svg)](https://david-dm.org/chenqingspring/lottie-angular2?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/chenqingspring/lottie-angular2.svg)](https://github.com/chenqingspring/lottie-angular2/issues)
[![GitHub stars](https://img.shields.io/github/stars/chenqingspring/lottie-angular2.svg)](https://github.com/chenqingspring/lottie-angular2/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/chenqingspring/lottie-angular2/master/LICENSE)

## Demo
https://chenqingspring.github.io/lottie-angular2/demo/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

lottie animation view for angular2

## Installation

Install through npm:
```
npm install --save lottie-angular2
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import { LottieAnimationViewModule } from 'lottie-angular2';

@NgModule({
  imports: [
    LottieAnimationViewModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
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
```

You may also find it useful to view the [demo source](https://github.com/chenqingspring/lottie-angular2/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/dist/umd/LottieAnimationView/LottieAnimationView.js"></script>
<script>
    // everything is exported LottieAnimationView namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via typedoc and can be viewed here:
https://chenqingspring.github.io/lottie-angular2/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
