# Simple and lightweight lazy-loading images library for Angular 2+.
This library focus only in lazy-load the images job to make it simple and lightweight as promise, you should handle the styles by yourself.

## Lazy-load Approach

* For images using `<img>` tag, it will check if the browser supports lazy-loading natively (`loading="lazy"`). If it does, let the browser does the job. If it doesn't, it will fallback to Intersection Observable API.

* For background images using `<div>` tag, it will use the Intersection Observable API approach.

## Install

To install the package, just run:

```
$ npm install ng-lazy-image
```

or the following if you are using yarn:

```
$ yarn add ng-lazy-image
```

## Setup

Import the library in your module (eg: app.module.ts)):

``` ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LazyImageModule } from 'ng-lazy-image'; // import the lib here
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LazyLoadImageModule, // include the lib into the module
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
```

Usage:

``` html
<!-- For image -->
<img data-src="https://images.unsplash.com/photo-1495954484750-af469f2f9be5?w=753&q=80" loading="lazy">

<!-- For background image -->
<div data-src="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=753&q=80" loading="lazy"></div>
```
