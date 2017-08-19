function multiply(x, y) {
  return x * y;
}

function run(a, b, callback) {
  return callback(a, b);
}

var result = run(5, 9, multiply);