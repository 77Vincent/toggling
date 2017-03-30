# Toggling

[![Build Status](https://travis-ci.org/77Vincent/toggling.svg?branch=master)](https://travis-ci.org/77Vincent/toggling)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Element's state toggling in browser

## Demo
<a href="http://www.77webtech.com/toggling/">Demo page</a>

## Installation
##### NPM

```sh
npm install --save toggling
```

##### CDN

```html
<script src="https://raw.githubusercontent.com/77Vincent/toggling/master/toggling.min.js"></script>
```

## Instantiate

```js
import Toggling from 'toggling';

new Toggling({
    trigger: 'trigger-selector',    // required
    target: 'target-selector',      // required
    handler: function(tar, tri) {   // required
        this.toggle(tar);
    },
    excluded: 'element-selector',   // optional
    event: 'click'                  // optional
    useCapture: false               // optional
});
```

## API

### Configurations
##### trigger: String
* Multiple elements will be returned if found, it's fine if no element is found.

##### target: String
* Only one single element will be returned if found, it's fine if no element is found.
* Will be first looked for elements that either are adjacent or descendant to the trigger element.
* Target could also be declared in trigger element in markup:

```html
<div data-toggling="this-is-target-selector">This is trigger element</div>
```

##### excluded: String
* Element that will be excluded from triggering the event
* Only accept one selector.
* Will be only looked for elements that either are adjacent or descendant to the trigger element.

##### handler: Function
* There are 2 default passed arrguments to be accessed: tar, tri

```js
handler: function(tar, tri) {
    // tar is the found target element
    // tri is the current trigger element
}
```

##### event: String
* Event to trigger the handler
* Default: click

##### useCapture: Boolean
* If capture or bubbling mode will be used.
* Default: false

### Instance functions
##### disable()
* Remove all event listener from triggering elements.

```js
var toggling = new Toggling({
    // configurations...
});

toggling.disable();
```

* Or could be called inside handler:

```js
new Toggling({
    trigger: ...,
    target: ...,
    handler: function() {
        this.disable();
    }
});

// This instance will be disabled after being triggered once.
```

##### enable()
* Bind event listener to triggers again.

```js
toggling.disable();
// Let's say you disabled an instance first

toggling.enable();
// Then you can enable it again.
```

##### show(element)
* Display the passed element.

##### hide(element)
* Hide the passed element.

##### toggle(element)
* Toggle the passed element.

##### addClass(element, className)
* Add className to element.

##### removeClass(element, className)
* Remove className from element.

##### toggleClass(element, className)
* Toggle className from element.

##### closest(element, className)
* Find the closest ancestor element to the passed element, according to the passed className.

## Compatibility
IE 9+

## Motivation
As we have a lot of pop-up features, the core concept behind is state changing. The goal of creating this module is to giving a simple, robust and versatile solution for this kind of feature. So that developers don't need to write similar codes repeatly.

The state changing model could be abstracted as "Trigger-Event-Handler-Target".

Besides, sometimes we don't want a certain child element to trigger the event, for instance we want to close an pop-up box by clicking anywhere on the screen but not a certain area, in toggling, then we can bind event to 'html' element, which represents the whole document, then exclude the certain element from event triggering.

What's more, each toggling instance provides you some very basic DOM-manipulation methods like show or hide element, add or remove class, which work without any javascript frameworks. But if you want to achieve more fancy effect in your handler, maybe jQuery, Prototype.js or some other javascript frameworks would be the best partner.
