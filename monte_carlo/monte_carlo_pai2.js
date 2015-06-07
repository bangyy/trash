'use strict';

var gcd = function(a, b) {
  if (a < b) {
    var tmp = a;
    a = b;
    b = tmp;
  }
  var r;
  while ((r = a % b) !== 0) {
    a = b;
    b = r;
  }
  return b;
};

var monteCalro = function(trials, experiment) {
  var iter = function(trialsRemaining, trialsPassed) {
    if (trialsRemaining === 0) {
      return trialsPassed / trials;
    } else if (experiment()) {
      return iter(trialsRemaining - 1, trialsPassed + 1);
    } else {
      return iter(trialsRemaining - 1, trialsPassed);
    }
  };
  return iter(trials, 0);
};

var estimatePai = function(trials) {
  return Math.sqrt(6 / monteCalro(trials, function() {
        var a = Math.floor(Math.random() * 1e10);
        var b = Math.floor(Math.random() * 1e10);
        if (gcd(a, b) === 1) {
          return true;
        } else {
          return false;
        }
    })
  );
};

console.log(estimatePai(10000));
