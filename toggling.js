/**
 * Toggling
 * @Description: Element's status toggling in browser
 * @Author: Vincent Wen at IT Consultis
 * @Compatibility: IE 9
 * @Lisence: MIT
 */

'use strict';

var Toggling = function(configurations) {

  this.configurations = configurations;

  // Set default configurations
  this.configurations.handler = configurations.handler ? configurations.handler : function() {};
  this.configurations.event = configurations.event ? configurations.event : 'click';
  this.configurations.useCapture = configurations.useCapture ? configurations.useCapture : false;

  // Array or triggers and handlers
  this.handler = [];
  this.trigger = Array.prototype.slice.call(document.querySelectorAll(configurations.trigger));

  // Enable the instance
  this.enable();
};

// Prototypes
Toggling.prototype = {

  // Functions that could be used to manipulate DOM elements in handler.
  hide: function hide(el) {
    el.style.display = 'none';
  },
  show: function show(el) {
    el.style.display = 'block';
  },
  toggle: function toggle(el) {
    if (el.style.display !== 'block') {
      this.show(el);
    } else {
      this.hide(el);
    }
  },
  addClass: function addClass(el, v) {
    if (el.className.search(v) < 0) { el.className += ' '+ v; }
  },
  removeClass: function removeClass(el, v) {
    el.className = el.className.replace(' ' + v, '');
  },
  toggleClass: function toggleClass(el, v) {
    if (el.className.search(v) >= 0) {
      this.removeClass(el, v);
    } else {
      this.addClass(el, v);
    }
  },
  closest: function closest(el, parent) {

    // Check if a given element is child of another given element
    var node = el.parentNode;

    while (node !== null) {
      if (node === parent) {
        return node;
      }
      node = node.parentNode;
    }
    return null;
  },

  // Bind event listener to all found trigger elements
  enable: function enable() {

    // Functions for creating closure for event handler binding
    var closure = function closure(target, trigger, excluded, event) {

      // To prevent excluded element from triggering the event
      if (event.target !== excluded && !this.closest(event.target, excluded)) {

        this.configurations.handler.call(this, target, trigger);
      }
    };

    for (var i = 0; i < this.trigger.length; i++) {
      var data = this.trigger[i].getAttribute('data-toggling');

      // Target element will be first looked for elements that are either adjacent or descendant to the trigger elements
      var parent = this.trigger[i].parentNode;

      // Get excluded element that will not trigger the event
      var excluded = parent.querySelector(this.configurations.excluded);

      // If target is bound in custom attribute in template
      if (data !== null) {
        if (data === 'self') {
          this.target = this.trigger[i];
        } else {
          this.target = parent.querySelector(data)
            ? parent.querySelector(data)
            : document.querySelector(data);
        }
      } else if (this.configurations.target !== undefined) {

        // If target is not bound in custom attribute
        // Then needs to be specified in javascript
        if (this.configurations.target === 'self') {

          // If target is specified as self, then target will be trigger
          this.target = this.trigger[i];
        } else {
          this.target = parent.querySelector(this.configurations.target)
            ? parent.querySelector(this.configurations.target)
            : document.querySelector(this.configurations.target);
        }
      } else {

        // No target is given
        throw new Error('No target is given, specify target either with custom attribute in template or in Javascript');
      }

      // Only run when target element is found
      if (this.target !== null) {
        this.handler.push(closure.bind(this, this.target, this.trigger[i], excluded));
        this.trigger[i].addEventListener(this.configurations.event, this.handler[i], this.configurations.useCapture);
      }
    }
  },

  // Remove event listener to all found trigger elements as if nothing has happened
  disable: function disable() {
    for (var i = 0; i < this.trigger.length; i++) {

      this.trigger[i].removeEventListener(this.configurations.event, this.handler[i], this.configurations.useCapture);
    }
  }
};

// Export to the environment
if (typeof define === 'function' && define.amd) {
  define('toggling', [], function() {
    return Toggling;
  });
} else if (typeof module === 'object' && exports) {
  module.exports = Toggling;
} else {
  window.Toggling = Toggling;
}
