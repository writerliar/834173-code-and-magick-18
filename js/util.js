'use strict';

(function () {
  var Style = {
    HIDDEN: 'hidden'
  };

  // var KeyboardKey = {
  //   ENTER: 'Enter',
  //   ESCAPE: 'Esc',
  //   ESCAPE_IE: 'Escape',
  // };
  //
  // var ESCAPE_KEYS = [
  //   KeyboardKey.ESCAPE,
  //   KeyboardKey.ESCAPE_IE,
  // ];
  //
  // var isEscapeKey = function (evt) {
  //   return ESCAPE_KEYS.indexOf(evt.key) > -1;
  // };
  //
  // var isEnterKey = function (evt) {
  //   return evt.key === KeyboardKey.ENTER;
  // };

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var getRandomElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var showElement = function (element) {
    element.classList.remove(Style.HIDDEN);
  };

  var hideElement = function (element) {
    element.classList.add(Style.HIDDEN);
  };

  window.util =  {
    // isEnterKey: isEnterKey,
    // isEscapeKey: isEscapeKey,

    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },


    // pressEscape: function (action) {
    //   if(isEscapeKey){
    //     action();
    //   }
    // },
    // pressEnter: function (action) {
    //   if(isEnterKey) {
    //     action();
    //   }
    // },


    getRandomElement: getRandomElement,
    showElement: showElement,
    hideElement: hideElement,
    hidden: Style.HIDDEN
  };
})();
