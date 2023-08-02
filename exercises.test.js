const {
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
} = require("./exercises.js");

describe("set of arithmetic operations", () => {
  test("suma de numeros", () => {
    expect(sum(1, 1)).toBe(2);
  });

  test("resta de numeros", () => {
    expect(sub(1, 1)).toBe(0);
  });

  test("multiplicacion de numeros", () => {
    expect(mul(1, 1)).toBe(1);
  });

  test("division de numeros", () => {
    expect(div(1, 1)).toBe(1);
  });

  test("exponente", () => {
    expect(power(2, 2)).toBe(4);
  });

  test("raiz cuadrada", () => {
    expect(raizCuadrada(16)).toBe(4);
  });

  test("factorial", () => {
    expect(factorial(3)).toBe(6);
  });

  test("numero primo", () => {
    expect(esPrimo(1)).toBe(false);
  });

  test("multiplicacion", () => {
    expect(mul2(5, 6)).toBe(30);
  });

  test("exponente", () => {
    expect(power2(4, 4)).toBe(256);
  });
});
