import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImageSrc]',
})
export class ImageSrcDirective {
  constructor(private eleRef: ElementRef) {
    let reference = eleRef.nativeElement.src;
    console.log('Directive content here: ' + reference);
  }
}
