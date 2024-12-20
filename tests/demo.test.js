test('Suma dos números pares y obtiene un resultado par', () => {
  const total = 1 + 1;
  expect(total % 2).toBe(0);
});

test('Suma dos números y obtiene un resultado impar', () => {
  
  const number1 = 2;
  const number2 = 1;
  const total = number1 + number2;
  expect(total % 2).not.toBe(0);
});

