'use strict';

(function () {

  var onPopupEscPress = function (evt) {
    if (document.activeElement !== window.domRef.userNameInput) {
      window.util.isEscEvent(evt, closePopup);
    }
  };

  var userDialogStartCoords = {};

  var openPopup = function () {
    window.util.showElement(window.domRef.userDialog);
    document.addEventListener('keydown', onPopupEscPress);

    userDialogStartCoords = {
      x: window.domRef.userDialog.offsetLeft,
      y: window.domRef.userDialog.offsetTop
    };
  };

  var closePopup = function () {
    window.util.hideElement(window.domRef.userDialog);
    document.removeEventListener('keydown', onPopupEscPress);

    window.domRef.userDialog.style.top = userDialogStartCoords.y + 'px';
    window.domRef.userDialog.style.left = userDialogStartCoords.x + 'px';
  };

  window.domRef.userDialogOpen.addEventListener('click', function () {
    openPopup();
  });

  window.domRef.userDialogOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  window.domRef.userDialogClose.addEventListener('click', function () {
    closePopup();
  });

  window.domRef.userDialogClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  var dialogHandler = window.domRef.userDialog.querySelector('.upload');

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.domRef.userDialog.style.top = (window.domRef.userDialog.offsetTop - shift.y) + 'px';
      window.domRef.userDialog.style.left = (window.domRef.userDialog.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (evtClick) {
          evtClick.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();
