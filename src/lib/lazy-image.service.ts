import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyImageService {
  private observer: IntersectionObserver;

  constructor() {
    this.init();
  }

  private init() {
    this.observer = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach(entry => {
        // not in the viewport, stop.
        if (!entry.isIntersecting) {
          return;
        }

        const lazyImage = entry.target as HTMLImageElement;
        const src = lazyImage.dataset.src;

        // safety, doesn't have data-src attribute, stop
        if (!src) {
          return;
        }

        lazyImage.tagName.toLowerCase() === 'img'
          ? lazyImage.src = src
          : lazyImage.style.backgroundImage = 'url(\'' + src + '\')';

        lazyImage.removeAttribute('loading');

        // done the job, stop observing this image
        imgObserver.unobserve(lazyImage);
      });
    });
  }

  observe(target: Element) {
    if (!this.observer) {
      this.init();
    }

    this.observer.observe(target);
  }
}
