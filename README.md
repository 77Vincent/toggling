# Toggling

[![Build Status](https://travis-ci.org/77Vincent/toggling.svg?branch=master)](https://travis-ci.org/77Vincent/toggling)

Element's state toggling in browser

## Installation

##### NPM
    
```sh
npm install --save toggling
```

##### Import

```js
import 'toggling';

// or

var Toggling = require('toggling');
```

## Instantiate

```js
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

#### Configurations

##### trigger: String

* Accept any types of selector, multiple elements will be returned if found.

##### target: String

* Accept any types of selectors but only one element will be returned if found.
* Target will be first looked for elements that either are adjacent or descendant to the trigger elements.
* Target could also be declared in template with 

```html
<div data-toggling="selector">
```

##### handler: Function

* There are 2 default given arrguments: tar, tri
* tar is the bound target element
* tri is the bound trigger element / elements

##### event: String

* Default: click

##### useCapture: Boolean

* Default: false

#### Instance functions

##### disable()

> Remove all event listener from trigger elements.

```js
var toggling = new Toggling({
    // parameters...
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

> Bind event listener to trigger elements.

```js
// Let's say you disabled an instance before
toggling.disable();

...

// You can enable it again.
toggling.enable();
```

##### show(el)

> Display the given element

el: native DOM element

##### hide(el)

> Hide the given element

el: native DOM element

##### toggle(el)

> Toggle the given element

el: native DOM element

##### addClass(el, className)

> Add class name to the given element

el: native DOM element

className: string

##### removeClass(el, className)

> Remove class name from the given element

el: native DOM element

className: string

##### toggleClass(el, className)

> Toggle class name from the given element

el: native DOM element

className: string

## Compatibility

IE 9+
