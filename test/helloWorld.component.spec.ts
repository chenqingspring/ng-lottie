import {
  inject,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { expect } from 'chai';
import { HelloWorldComponent } from './../src/helloWorld.component';
import { LottieAnimationViewModule } from '../src';

describe('lottie-animation-view-hello-world component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [LottieAnimationViewModule.forRoot()]});
  });

  it('should say hello world', () => {
    const fixture: ComponentFixture<HelloWorldComponent> = TestBed.createComponent(HelloWorldComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML.trim()).to.equal('Hello world from the lottie animation view for angular2 module!');
  });

});
