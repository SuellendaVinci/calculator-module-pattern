const MODULE = (function () {
  var calculator = { count: 0 };

  calculator.sum = function (n1, n2) {
    calculator.count = n1 + n2;
    return calculator.count;
  };

  calculator.sub = function (n1, n2) {
    calculator.count = n1 - n2;
    return calculator.count;
  };

  calculator.mult = function (n1, n2) {
    calculator.count = n1 * n2;
    return calculator.count;
  };

  calculator.div = function (n1, n2) {
    if (n2 === 0) {
      alert("Não é possível dividir um número por zero");
      return "Tente novamente";
    } else {
      calculator.count = n1 / n2;
    }
    return calculator.count;
  };

  calculator.clear = function () {
    return 0;
  };

  calculator.getCount = function () {
    return calculator.count;
  };

  // Remapeando Objeto - Sua primeira API!
  return {
    add: calculator.sum,
    sub: calculator.sub,
    mult: calculator.mult,
    div: calculator.div,
  };
})();

module.exports = MODULE;
