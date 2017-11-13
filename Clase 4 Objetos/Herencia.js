function Felino () {}

Felino.prototype = new Animal();
Felino.prototype.constructor = Felino;

Felino.prototype.maullar = function () {
  console.log('meowwwww');
};

var iris = new Felino();
iris.crecer();
iris.maullar();
