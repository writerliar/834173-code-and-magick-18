'use strict';

(function () {
  var Style = {
    HIDDEN: 'hidden'
  };

  var KeyboardKey = {
    ENTER: 'Enter',
    ESCAPE: 'Esc',
    ESCAPE_IE: 'Escape',
  };

  var ESCAPE_KEYS = [
    KeyboardKey.ESCAPE,
    KeyboardKey.ESCAPE_IE,
  ];

  var isEscapeKey = function (evt) {
    return ESCAPE_KEYS.indexOf(evt.key) > -1;
  };

  var isEnterKey = function (evt) {
    return evt.key === KeyboardKey.ENTER;
  };

  var getRandomElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var showElement = function (element) {
    element.classList.remove(Style.HIDDEN);
  };

  var hideElement = function (element) {
    element.classList.add(Style.HIDDEN);
  };

  var hasMoved = function (start, end) {
    return start.x !== end.clientX || start.y !== end.clientY;
  };

  var makeDragStart = function (onMove, onEnd) {
    return function (evt) {
      evt.preventDefault();
      var start = {
        clientX: evt.clientX,
        clientY: evt.clientY
      };

      var onMouseMove = function (moveEvt) {
        moveEvt.preventDefault();
        onMove(moveEvt.movementX, moveEvt.movementY);
      };

      var onMouseUp = function (upEvt) {
        upEvt.preventDefault();
        document.removeEventListener('mousemove', onMouseMove);
        return hasMoved(start, upEvt) && onEnd();
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp, {once: true});
    }
  };

  window.util = {
    isEscEvent: function (evt, action) {
      if (isEscapeKey(evt)) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (isEnterKey(evt)) {
        action();
      }
    },
    makeDragStart: makeDragStart,
    getRandomElement: getRandomElement,
    showElement: showElement,
    hideElement: hideElement,
    hidden: Style.HIDDEN
  };
})();
