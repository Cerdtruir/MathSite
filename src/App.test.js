/* eslint-disable no-eval */
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import App from './App';

describe('Navigation', () => {
  test('Main heading', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Math Site');
  });

  test('defaults to home', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Home'));
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Welcome to our page!');
  });

  test('navigation home', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Home'));
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Welcome to our page!');
  });

  test('navigation calculator', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Calculator'));
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent("Let's do some math");
  });

  test('navigation quote', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Quote'));
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Quote About maths placeholder');
  });
});

describe('Calculator works', () => {
  test('numbers work', () => {
    const buttonsArray = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
    render(<App />);
    fireEvent.click(screen.getByText('Calculator'));
    buttonsArray.forEach((button) => {
      fireEvent.click(screen.getByText(button));
      expect(screen.getByTestId('display')).toHaveTextContent(button);
    });
  });

  test('Math works', () => {
    const operatorsArray = ['+', '-', 'x', '÷', '%'];
    render(<App />);
    fireEvent.click(screen.getByText('Calculator'));
    operatorsArray.forEach((operator) => {
      let currentOperator = operator;
      if (operator === '÷') {
        currentOperator = '/';
      }
      if (operator === 'x') {
        currentOperator = '*';
      }
      fireEvent.click(screen.getByText(6));
      fireEvent.click(screen.getByText(operator));
      fireEvent.click(screen.getByText(7));
      fireEvent.click(screen.getByText('='));
      expect(screen.getByTestId('display')).toHaveTextContent(eval(`6 ${currentOperator} 7`));
    });
  });

  test('AC works', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Calculator'));
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('AC'));
    expect(screen.getByTestId('display')).toHaveTextContent('0');
  });

  test('+/- works', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Calculator'));
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('+/-'));
    expect(screen.getByTestId('display')).toHaveTextContent('-9');
    fireEvent.click(screen.getByText('+/-'));
    expect(screen.getByTestId('display')).toHaveTextContent('9');
  });
});
