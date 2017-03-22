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
import 'toggling';

new Toggling({
    trigger: 'trigger-selector',    // required
    target: 'target-selector',      // required
    handler: function(tar, tri) {   // required
        this.toggle(tar);
    },
    event: 'click'                  // optional
    useCapture: false               // optional
});
```

## API

### Configurations
##### trigger: String

* Accept any types of selector, multiple elements will be returned if found.
##### target: String

* Accept any types of selectors but only one element will be returned if found.
* Target will be first looked for elements that either are adjacent or descendant to the trigger elements.
* Target could also be declared in trigger element in markup:
```html
<div class="this-is-trigger-element" data-toggling="selector">
```

##### handler: Function

* There are 2 default passed arrguments: tar, tri
* tar is the bound target element
* tri is the bound trigger element / elements

##### event: String

* Event to trigger the event handler
* Default: click

##### useCapture: Boolean

* Default: false

### Instance functions
##### disable()

* Remove all event listener from trigger elements.

```js
var toggling = new Toggling({
    // configurations...
});

toggling.disable();

// Or can be called inside handler:

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
...

toggling.enable();
// Then you can enable it again.
```

##### show(element)
* Let the passed element display="block".

##### hide(element)
* Let the passed element display="none".

##### toggle(element)
* Toggle the passed element.

##### addClass(element, className)
* Add className to element.

##### removeClass(el, className)
* Remove className from element.

##### toggleClass(el, className)
* Toggle className from element.

## Compatibility
IE 9+
