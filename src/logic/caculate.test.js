import calculate from './calculate';

test('AC button', () => {
  const obj = {
    total: null,
    next: 1,
    operation: null,
  };

  expect(calculate(obj, 'AC')).toMatchObject({
    total: null,
    next: null,
    operation: null,
  });
});

test('to negative', () => {
  const obj = {
    total: null,
    next: '5',
    operation: null,
  };

  expect(calculate(obj, '+/-')).toMatchObject({
    next: '-5',
  });
});

test('to positive', () => {
  const obj = {
    total: null,
    next: '-5',
    operation: null,
  };

  expect(calculate(obj, '+/-')).toMatchObject({
    next: '5',
  });
});

test('operator +', () => {
  const obj = {
    total: null,
    next: '9',
    operation: null,
  };

  expect(calculate(obj, '+')).toMatchObject({
    total: '9',
    operation: '+',
  });
});

test('operator -', () => {
  const obj = {
    total: null,
    next: '9',
    operation: null,
  };

  expect(calculate(obj, '-')).toMatchObject({
    total: '9',
    operation: '-',
  });
});

test('operator x', () => {
  const obj = {
    total: null,
    next: '9',
    operation: null,
  };

  expect(calculate(obj, 'x')).toMatchObject({
    total: '9',
    operation: 'x',
  });
});

test('operator /', () => {
  const obj = {
    total: null,
    next: '9',
    operation: null,
  };

  expect(calculate(obj, '/')).toMatchObject({
    total: '9',
    operation: '/',
  });
});

test('operator %', () => {
  const obj = {
    total: null,
    next: '9',
    operation: null,
  };

  expect(calculate(obj, '%')).toMatchObject({
    total: '9',
    operation: '%',
  });
});

test('equals', () => {
  const obj = {
    total: '4',
    next: '5',
    operation: '+',
  };

  expect(calculate(obj, '=')).toMatchObject({
    total: '9',
  });
});

test('first number', () => {
  const obj = {
    total: null,
    next: null,
  };

  expect(calculate(obj, '5')).toMatchObject({
    total: null,
    next: '5',
  });
});

test('next digit', () => {
  const obj = {
    total: null,
    next: 5,
  };

  expect(calculate(obj, '5')).toMatchObject({
    total: null,
    next: '55',
  });
});

test('next number', () => {
  const obj = {
    total: '4',
    next: null,
    operation: '+',
  };

  expect(calculate(obj, '5')).toMatchObject({
    total: '4',
    next: '5',
    operation: '+',
  });
});

test('decimal point', () => {
  const obj = {
    total: null,
    next: '4',
    operation: null,
  };

  expect(calculate(obj, '.')).toMatchObject({
    total: null,
    next: '4.',
  });
});

test('extra decimal point', () => {
  const obj = {
    total: null,
    next: '4.',
    operation: null,
  };

  expect(calculate(obj, '.')).toMatchObject({
    total: null,
    next: '4.',
  });
});

test('zero', () => {
  const obj = {
    total: null,
    next: '4',
    operation: '+',
  };

  expect(calculate(obj, '0')).toMatchObject({
    next: '40',
  });
});

test('extra zero', () => {
  const obj = {
    total: null,
    next: '0',
    operation: '+',
  };

  expect(calculate(obj, '0')).toMatchObject({
  });
});
