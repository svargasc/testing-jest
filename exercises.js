function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function raizCuadrada(num) {
  return Math.sqrt(num);
}

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

function esPrimo(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function mul2(a, b) {
  return a * b;
}

function power2(base, exponent) {
  return Math.pow(base, exponent);
}

module.exports = {
  sum,
  sub,
  mul,
  div,
  power,
  raizCuadrada,
  factorial,
  esPrimo,
  mul2,
  power2,
};
