'use strict';

(function () {

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

  var makeWizard = function () {
    return {
      name: window.util.getRandomElement(WIZARD_NAMES),
      surname: window.util.getRandomElement(WIZARD_SURNAMES),
      coatColor: window.util.getRandomElement(COATS_COLOR),
      eyesColor: window.util.getRandomElement(EYES_COLORS)
    };
  };

  var generateWizards = function (num) {
    return new Array(num).fill(null).map(makeWizard);
  };

  var renderWizard = function (wizard) {
    var wizardElement = window.domRef.similarWizardTemplate.cloneNode(true);

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

    window.domRef.similarListElement.appendChild(fragment);
  };

  window.colorize(window.domRef.userWizardCoat, COATS_COLOR, window.domRef.userWizardCoatInput);
  window.colorize(window.domRef.userWizardEyes, EYES_COLORS, window.domRef.userWizardEyesInput);
  window.colorize(window.domRef.userWizardFireball, FIREBALLS_COLOR, window.domRef.userWizardFireballInput);

  window.domRef.userNameInput.addEventListener('invalid', function () {
    if (window.domRef.userNameInput.validity.tooShort) {
      window.domRef.userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (window.domRef.userNameInput.validity.tooLong) {
      window.domRef.userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (window.domRef.userNameInput.validity.valueMissing) {
      window.domRef.userNameInput.setCustomValidity('Обязательное поле');
    } else {
      window.domRef.userNameInput.setCustomValidity('');
    }
  });

  window.util.showElement(window.domRef.similarUser);
  addWizards(generateWizards(WIZARD_AMOUNT));
})();
