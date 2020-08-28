import { Injector, Directive, ElementRef } from '@angular/core';
import { LazyImageService } from './lazy-image.service';

@Directive({
  selector: '[loading]',
})
export class LazyImageDirective {

  constructor(
    private injector: Injector,
    private el: ElementRef) {

    const img = this.el.nativeElement;

    // native solution
    if ('loading' in HTMLImageElement.prototype && img.tagName.toLowerCase() === 'img') {
      img.src = img.dataset?.src;
    } else {
      // fallback using intersection observable API
      const lazyService = this.injector.get(LazyImageService);
      lazyService.observe(img);
    }
  }
}
