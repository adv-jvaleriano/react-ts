test('Suma dos números pares y obtiene un resultado par', () => {
  
  const number1 = 2;
  const number2 = 2;
  const total = number1 + number2;
  expect(total % 2).toBe(0);
});