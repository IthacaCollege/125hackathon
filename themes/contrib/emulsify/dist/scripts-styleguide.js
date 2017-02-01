// Example Global javascript

// If using Typekit
// try {
//   Typekit.load();
// }
// catch (e) {
//   alert('An error has occurred: ' + e.message);
// }

// UNCOMMENT IF DRUPAL
// Drupal.behaviors.accordion = {
//   attach: function (context, settings) {

// REMOVE IF DRUPAL
(function() {

    'use strict';

    // Set 'document' to 'context' if Drupal
    var accordionItem = document.querySelectorAll('.accordion-item__term');
    var accordionDef = document.querySelectorAll('.accordion-item__def');

    // If javascript, hide accordion definition on load
    function jsCheck() {
      for (var i = 0; i < accordionDef.length; i++) {
        if (accordionDef[i].classList) {
          accordionDef[i].classList.add('active');
          accordionDef[0].previousElementSibling.classList.add('is-active');
        }
        else {
          accordionDef[i].className += ' active';
          accordionDef[0].previousElementSibling.classList.add('is-active');
        }
      }
    }

    jsCheck();

    // Accordion Toggle
    // Mobile Click Menu Transition
    for (var i = 0; i < accordionItem.length; i++) {
      accordionItem[i].addEventListener('click', function (e) {
        var className = 'is-active';
        // Add is-active class
        if (this.classList) {
          this.classList.toggle(className);
        }
        else {
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

// REMOVE IF DRUPAL
})();

// UNCOMMENT IF DRUPAL
//   }
// };

(function () {

  'use strict';

  var el = document.querySelectorAll('.tabs');
  var tabNavigationLinks = document.querySelectorAll('.tabs__link');
  var tabContentContainers = document.querySelectorAll('.tabs__tab');
  var activeIndex = 0;

  /**
   * handleClick
   * @description Handles click event listeners on each of the links in the
   *   tab navigation. Returns nothing.
   * @param {HTMLElement} link The link to listen for events on
   * @param {Number} index The index of that link
   */
  var handleClick = function (link, index) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      goToTab(index);
    });
  };

  /**
   * goToTab
   * @description Goes to a specific tab based on index. Returns nothing.
   * @param {Number} index The index of the tab to go to
   */
  var goToTab = function (index) {
    if (index !== activeIndex && index >= 0 && index <= tabNavigationLinks.length) {
      tabNavigationLinks[activeIndex].classList.remove('is-active');
      tabNavigationLinks[index].classList.add('is-active');
      tabContentContainers[activeIndex].classList.remove('is-active');
      tabContentContainers[index].classList.add('is-active');
      activeIndex = index;
    }
  };

  /**
   * init
   * @description Initializes the component by removing the no-js class from
   *   the component, and attaching event listeners to each of the nav items.
   *   Returns nothing.
   */
  for (var e = 0; e < el.length; e++) {
    el[e].classList.remove('no-js');
  }

  for (var i = 0; i < tabNavigationLinks.length; i++) {
    var link = tabNavigationLinks[i];
    handleClick(link, i);
  }

})();

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
