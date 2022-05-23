import operate from './operate';

test('1 + 2 to equal 3', () => {
  expect(operate(1, 2, '+')).toBe('3');
});

test('35 - 2 to equal 33', () => {
  expect(operate(35, 2, '-')).toBe('33');
});

test('6 x 7 to equal 42', () => {
  expect(operate(6, 7, 'x')).toBe('42');
});

test('10 ÷ 2 to equal 5', () => {
  expect(operate(10, 2, '÷')).toBe('5');
});

test('10 % 4 to equal 2', () => {
  expect(operate(10, 4, '%')).toBe('2');
});

test('throw error', () => {
  expect(() => {
    operate(10, 4, '$');
  }).toThrow();
});
