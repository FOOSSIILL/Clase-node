var numbers = require('numbers');

numbers.calculus.Riemann(Math.sin, -2, 4, 200);

numbers.calculus.adaptiveSimpson(Math.sin, -2, 4, .0001);

var myfunc = function(x) {
    return 2*Math.pow(x,2) + 1;
}

numbsers.calculus.Riemann(myfunc, -2, 4, 200);
numbers.calculus.Riemann(myfunc, -2, 4, .0001);
