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

  var onClickPreventDefault = function (evtClick) {
    evtClick.preventDefault();
  };

  var renderDialog = function(x, y) {
    window.domRef.userDialog.style.top = (window.domRef.userDialog.offsetTop + y) + 'px';
    window.domRef.userDialog.style.left = (window.domRef.userDialog.offsetLeft + x) + 'px';
  };

  var onDialogDragMove = function (x, y) {
    renderDialog(x, y);
  };

  var onDialogDragEnd = function () {
    dialogHandler.addEventListener('click', onClickPreventDefault, {once: true});
  };

  var onDialogDragStart = window.util.makeDragStart(
    onDialogDragMove,
    onDialogDragEnd
  );

  dialogHandler.addEventListener('mousedown', onDialogDragStart);

})();
