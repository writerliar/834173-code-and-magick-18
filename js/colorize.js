'use strict';

(function () {
  window.colorize = function (element, array, input) {
    element.addEventListener('click', function () {
      var newColor = window.util.getRandomElement(array);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = newColor;
      } else {
        element.style.fill = newColor;
      }
      input.value = newColor;
    });
  };
})();
