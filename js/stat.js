'use strict';

var Cloud = {
  X: 100,
  Y: 10,
  HEIGHT: 270,
  WIDTH: 420
};

var Shadow = {
  COLOR: 'rgba(0, 0, 0, 0.7)',
  X: 10,
  Y: 10,
  BLUR: 0
};

var Bar = {
  WIDTH: 40,
  STEP: 50,
  MAX_HEIGHT: 150
};

var GAP = 10;
var FONT_GAP = 15;

var renderCloud = function (ctx) {
  ctx.shadowColor = Shadow.COLOR;
  ctx.shadowOffsetX = Shadow.X;
  ctx.shadowOffsetY = Shadow.Y;
  ctx.shadowBlur = Shadow.BLUR;
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(Cloud.X, Cloud.Y, Cloud.WIDTH, Cloud.HEIGHT);
  ctx.shadowColor = 'rgba(0, 0, 0, 0)';
};

var generateRandomBlue = function () {
  return 'hsl(240, ' + Math.floor(Math.random() * 100) + '%, 50%)';
};

var renderCloudTitle = function (ctx) {
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';

  ctx.fillText('Ура, вы победили!', Cloud.X + GAP * 2, Cloud.Y + GAP * 2);
  ctx.fillText('Список результатов:', Cloud.X + GAP * 2, (Cloud.Y + FONT_GAP) + GAP * 2);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx);
  renderCloudTitle(ctx);

  var maxTime = Math.max.apply(null, times);

  for (var i = 0; i < names.length; i++) {
    var time = Math.floor(times[i]);
    var name = names[i];

    var barHeight = Math.floor(time * Bar.MAX_HEIGHT / maxTime);

    ctx.fillStyle = '#000000';
    ctx.fillText(time, Cloud.X + Bar.STEP + (Bar.WIDTH + Bar.STEP) * i, Cloud.HEIGHT - Bar.STEP - barHeight);
    ctx.fillText(name, Cloud.X + Bar.STEP + (Bar.WIDTH + Bar.STEP) * i, Cloud.HEIGHT - GAP * 2);

    ctx.fillStyle = name === 'Вы' ? 'rgba(255, 0, 0, 1)' : generateRandomBlue();

    ctx.fillRect(Cloud.X + Bar.STEP + (Bar.WIDTH + Bar.STEP) * i, Cloud.HEIGHT - GAP * 3, Bar.WIDTH, -barHeight);
  }
};
