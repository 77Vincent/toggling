# toggling

Element's state toggling in browser

## Installation

##### NPM

    npm install --save toggling

##### Import

    import 'Toggling';

## Instantiate

    new Toggling({
        trigger: 'trigger-selector',
        target: 'target-selector',
        handler: function(tar, tri) {
            this.toggle(tar);
        }
    });

## API

#### Configurations

##### trigger: string

> Selector of element that event listener is bound to.

* Accept any types of selector, multiple elements will be used if found.

##### target: string

> Selector of element that event handler is bound to.

* Accept any types of selectors but only one element will be used if found.
* Target will be first looked for elements that either are adjacent or descendant to the trigger elements.
* Target could also be presented in template instead of being defined in javascript.

##### handler: function

> Function to be called after event is triggered.

* There are 2 default given arrguments: tar, tri
* tar is the bound target element
* tri is the bound trigger element / elements

##### event: string

> Event that will be listened to.

* Default: click

##### useCapture: Boolean

> If use capture mode in addEventListener

* Default: false

#### Instance functions

##### disable()

> Remove all event listener from trigger elements.

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

##### enable()

> Bind event listener to trigger elements.
    
    // Let's say you disabled an instance before
    toggling.disable();
    
    ...
    
    // You can enable it again.
    toggling.enable();

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
