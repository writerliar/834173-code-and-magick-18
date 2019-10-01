'use strict';
(function () {
  var userDialog = document.querySelector('.setup');
  var userDialogOpen = document.querySelector('.setup-open');
  var userDialogClose = document.querySelector('.setup-close');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarUser = userDialog.querySelector('.setup-similar');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var userWizardSetup = document.querySelector('.setup-player');
  var userWizardCoat = userWizardSetup.querySelector('.wizard-coat');
  var userWizardCoatInput = userWizardSetup.querySelector('[name="coat-color"]');
  var userWizardEyes = userWizardSetup.querySelector('.wizard-eyes');
  var userWizardEyesInput = userWizardSetup.querySelector('[name="eyes-color"]');
  var userWizardFireball = userWizardSetup.querySelector('.setup-fireball-wrap');
  var userWizardFireballInput = userWizardSetup.querySelector('[name="fireball-color"]');
  var userNameInput = document.querySelector('.setup-user-name');

  window.domRef =  {
    userDialog: userDialog,
    userDialogOpen: userDialogOpen,
    userDialogClose: userDialogClose,
    similarListElement: similarListElement,
    similarUser: similarUser,
    similarWizardTemplate: similarWizardTemplate,
    userWizardSetup: userWizardSetup,
    userWizardCoat: userWizardCoat,
    userWizardCoatInput: userWizardCoatInput,
    userWizardEyes: userWizardEyes,
    userWizardEyesInput: userWizardEyesInput,
    userWizardFireball: userWizardFireball,
    userWizardFireballInput: userWizardFireballInput,
    userNameInput: userNameInput
  }
})();
