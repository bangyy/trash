'use strict';

var calcPai = function (max) {
  var inPoint = 0;
  for (var i = 0; i < max; i++) {
    var x = Math.random();
    var y = Math.random();
    if (x * x + y * y <= 1) {
      inPoint++;
    }
  }
  var pai = 4 * inPoint / max;

  return pai;
}

print(calcPai(1000000));
