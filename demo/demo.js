
// One trigger on one target
var foo = new Toggling({
  trigger: '#trigger_foo',
  target: '#target_foo',
  handler: function(tar, tri) {
    this.toggle(tar);
  }
});

// Declare target in markup
var foz = new Toggling({
  trigger: '#trigger_foz',
  handler: function(tar, tri) {
    this.toggle(tar);
  }
});

// Multiple triggers with single unique target
var open = new Toggling({
  trigger: '.open',
  target: '#target_bar',
  handler: function() {
    this.show(this.target);
  }
});

var close = new Toggling({
  trigger: '.close',
  handler: function() {
    this.hide(this.target);
  }
});

var toggle = new Toggling({
  trigger: '.toggle',
  handler: function() {
    this.toggle(this.target);
  }
});

// Self trigger
var self = new Toggling({
  trigger: '#trigger_self',
  target: 'self',
  handler: function() {
    this.toggleClass(this.target, 'active');
  }
});

// First look for sibling target
var scope = new Toggling({
  trigger: '.trigger-scope',
  target: '.target-scope',
  handler: function(tar, tri) {
    this.toggleClass(tri, 'active');
    this.toggle(tar);
  }
});

// Outside close
var exclude = new Toggling({
  trigger: '#trigger-exclude',
  target: '#target-exclude',
  handler: function(tar, tri) {
    this.toggle(tar);
  }
});

var excluded = new Toggling({
  trigger: 'html',
  excluded: '#trigger-exclude',
  target: '#target-exclude',
  handler: function(tar, tri) {
    this.hide(tar);
  }
});

// Full screen popup
new Toggling({
  trigger: '#popup-trigger',
  target: '#popup-target',
  handler: function() {
    this.addClass(this.target, 'active');
  }
});

new Toggling({
  trigger: '#popup-target',
  target: 'self',
  excluded: '.content',
  handler: function() {
    this.removeClass(this.target, 'active');
  }
});
