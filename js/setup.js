'use strict';

var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var WIZARD_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var COATS_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var FIREBALLS_COLOR = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
var WIZARD_AMOUNT = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var Style = {
  HIDDEN: 'hidden'
};

var userDialog = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var userDialogOpen = document.querySelector('.setup-open');
var userDialogClose = document.querySelector('.setup-close');
var similarUser = userDialog.querySelector('.setup-similar');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var userNameInput = document.querySelector('.setup-user-name');
var userWizardSetup = document.querySelector('.setup-player');
var userWizardCoat = userWizardSetup.querySelector('.wizard-coat');
var userWizardCoatInput = userWizardSetup.querySelector('[name="coat-color"]');
var userWizardEyes = userWizardSetup.querySelector('.wizard-eyes');
var userWizardEyesInput = userWizardSetup.querySelector('[name="eyes-color"]');
var userWizardFireball = userWizardSetup.querySelector('.setup-fireball-wrap');
var userWizardFireballInput = userWizardSetup.querySelector('[name="fireball-color"]');

var getRandomElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var showElement = function (element) {
  element.classList.remove(Style.HIDDEN);
};

var hideElement = function (element) {
  element.classList.add(Style.HIDDEN);
};

var makeWizard = function () {
  return {
    name: getRandomElement(WIZARD_NAMES),
    surname: getRandomElement(WIZARD_SURNAMES),
    coatColor: getRandomElement(COATS_COLOR),
    eyesColor: getRandomElement(EYES_COLORS)
  };
};

var generateWizards = function (num) {
  return new Array(num).fill(null).map(makeWizard);
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var addWizards = function (wizards) {
  var fragment = document.createDocumentFragment();

  wizards.forEach(function (wizard) {
    fragment.appendChild(renderWizard(wizard));
  });

  similarListElement.appendChild(fragment);
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && document.activeElement !== userNameInput) {
    closePopup();
  }
};

var openPopup = function () {
  showElement(userDialog);
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  hideElement(userDialog);
  document.removeEventListener('keydown', onPopupEscPress);
};

userDialogOpen.addEventListener('click', function () {
  openPopup();
});

userDialogOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

userDialogClose.addEventListener('click', function () {
  closePopup();
});

userDialogClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

userWizardCoat.addEventListener('click', function () {
  var userCoatColor = getRandomElement(COATS_COLOR);

  userWizardCoat.style.fill = userCoatColor;
  userWizardCoatInput.value = userCoatColor;
});

userWizardEyes.addEventListener('click', function () {
  var userEyesColor = getRandomElement(EYES_COLORS);

  userWizardEyes.style.fill = userEyesColor;
  userWizardEyesInput .value = userEyesColor;
});

userWizardFireball.addEventListener('click', function () {
  var userFireballColor = getRandomElement(FIREBALLS_COLOR);

  userWizardFireball.style.backgroundColor = userFireballColor;
  userWizardFireballInput.value = userFireballColor;
});

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

// showElement(userDialog);
showElement(similarUser);
addWizards(generateWizards(WIZARD_AMOUNT));
