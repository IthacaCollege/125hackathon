Drupal.behaviors.header = {
  attach: function (context, settings) {
    'use strict';

    // Set 'document' to 'context' if Drupal
    var menuToggle = document.querySelectorAll('.mobile-nav__icon');

    // Mobile Menu Toggle
    // Mobile Click Menu Transition
    menuToggle[0].addEventListener('click', function (e) {
    var className = 'is-active';

    // Add is-active class
    if (this.classList) {
        this.classList.toggle(className);
    } else {
        var classes = this.className.split(' ');
        var existingIndex = classes.indexOf(className);

        if (existingIndex >= 0) {
            classes.splice(existingIndex, 1);
        }
        else {
            classes.push(className);
        }
        this.className = classes.join(' ');
    }
    e.preventDefault();
    });

  }
};
