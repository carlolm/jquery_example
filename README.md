Deployed here:
- https://shielded-dusk-67196.herokuapp.com

Link to scripts in HTML file
- `<script type="text/javascript" src="script.js"></script>`
- jQuery UI: `<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>`

`$(document).ready(function() {});`
- Do something to this document
- When html document is ready


# Coding Conventions
- $var: $ prefix denotes jQuery object
- $('var'): creates a jQuery object (html tags, IDs, classes, CSS selector)
- $('var1, var2'): can select multiple objects


# Functions:
- `mouseenter()` | `mouseleave()`
- `click()` | `dblclick()`
- `hover([function 1: hover], [function 2: mouse leaves])`
- `hide()`
- `fadeTo('fast', 0.25)`: quickly fade to 25% opacity
- `faceIn('fast')` | `fadeOut('slow')`
- `slideToggle('slow')`
- `append()` | `prepend()` or `appendTo()` | `prependTo()`
- `empty()` | `remove()`
- `after()` | `before()`
- `addClass('className')` | `removeClass('className')`
- `toggleClass()`
- `height('100px')`| `width('100ox')`
- `css('property', 'value')`
- `html()` | `val()`: change the contents between the selected item's opening and closing tags
- `on(‘event’, ‘selector’, function(){})`
- `focus()`: usual for input or text area
- `keydown()`: called on document
- `animate({left: “+=10px”}, ‘fast’)`
- `accordion({collapsible: true, active: false})`
- `draggable()`
- `resizable()`
- `selectable()`
- `sortable()`


# Examples:
- `var input = $('input[name=firstName]’).val()`
- ```$(document).keydown(function(key) {
    switch(parseInt(key.which, 10)) {
      case 37: // left
        $('img').animate({left: "-=10px"}, 'fast');
        break;
      case 38: // up
        $('img').animate({top: "-=10px"}, 'fast');
        break;
      case 39: // right
        $('img').animate({left: "+=10px"}, 'fast');
        break;
      case 40: // down
        $('img').animate({top: "+=10px"}, 'fast');
        break;     
    }
  });```


# Links:
- Selectors: http://learn.jquery.com/using-jquery-core/selecting-elements/
- Selectors Library: http://api.jquery.com/category/selectors/
- jQuery UI: http://jqueryui.com
- Developer libraries: https://developers.google.com/speed/libraries/
