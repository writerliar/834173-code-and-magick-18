'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var MAX_BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_STEP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  if (arr.length > 0) {
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура, вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, (CLOUD_Y + FONT_GAP) + GAP * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    times[i] = Math.floor(times[i]);

    var barHeight = (times[i] * MAX_BAR_HEIGHT / maxTime);

    ctx.fillStyle = '#000000';
    ctx.fillText(times[i], CLOUD_X + BAR_STEP + (BAR_WIDTH + BAR_STEP) * i, CLOUD_HEIGHT - BAR_STEP - barHeight);
    ctx.fillText(names[i], CLOUD_X + BAR_STEP + (BAR_WIDTH + BAR_STEP) * i, CLOUD_HEIGHT - GAP * 2);

    ctx.fillStyle = 'hsl(240, ' + Math.floor(Math.random() * 100) + '%' + ', 50%)';

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }

    ctx.fillRect(CLOUD_X + BAR_STEP + (BAR_WIDTH + BAR_STEP) * i, CLOUD_HEIGHT - GAP * 3, BAR_WIDTH, -barHeight);
  }
};
