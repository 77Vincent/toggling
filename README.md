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
* Multiple elements will be returned if found, it's fine if no element is found.

##### target: String
* Only one single element will be returned if found, it's fine if no element is found.
* Will be first looked for elements that either are adjacent or descendant to the trigger element.
* Target could also be declared in trigger element in markup:

```html
<div data-toggling="this-is-target-selector">This is trigger element</div>
```

##### excluded: String
* Elements that will be excluded from triggering the event
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
* Default: false

### Instance functions
##### disable()
* Remove all event listener from trigger elements.

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

## Motivation
As we have a lot of pop-up-box features or various kinds of show-or-hide features, the core concept behind is the change of status. 

The model could be abstracted as "Trigger-Event-Handler-Target". 

Trigger is the object on which event is listening to. 
Handler will take place when event is fired. 
Target is usually the object on which handler will operate, which could also be trigger or other elements. 

Besides, sometimes we want to bind event to an element but not to its certain child element, for instance we want to close an pop-up box by clicking anywhere on the screen but not a certain area, then we can bind event-handler to 'html' element, which represents the whole document, then exclude a certain area from the event binding.

The goal of creating this module is to giving a easy and robust solution for this kind of feature. So that developers don't need to write similar codes repeatly from project to project and works without any javascript frameworks. But if you want to achieve more fancy effect in your handler, maybe jQuery would be the best partner.
