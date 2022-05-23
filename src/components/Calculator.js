/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Button({ buttonClass, value, clickFunction }) {
  return (
    <button
      className={buttonClass}
      onClick={() => {
        clickFunction(value);
      }}
      type="button"
    >
      {value}
    </button>
  );
}

Button.defaultProps = {
  class: 'button',
};

function KeypadRight({ getState }) {
  const buttonsArray = ['÷', 'x', '-', '+', '='];
  return (
    <div className="keypad-right">
      {buttonsArray.map((button) => (
        <Button key={button} value={button} clickFunction={getState} buttonClass={`button-${button}`} />
      ))}
    </div>
  );
}

function KeypadLeft({ getState }) {
  const buttonsArray = ['AC', '+/-', '%', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
  return (
    <div className="keypad-left">
      {buttonsArray.map((button) => (
        <Button key={button} value={button} clickFunction={getState} buttonClass={`button-${button}`} />
      ))}
    </div>
  );
}

function Keypad({ getState }) {
  return (
    <div className="keypad">
      <KeypadLeft getState={getState} />
      <KeypadRight getState={getState} />
    </div>
  );
}

function Display({ data }) {
  const value = () => {
    if (data.next) {
      return data.next;
    }
    if (data.total) {
      return data.total;
    }

    return '0';
  };

  return (
    <div data-testid="display" className="display">
      <p className="display-text">
        {value()}
      </p>
    </div>
  );
}

function Calculator() {
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const getState = (button) => {
    const newData = calculate(data, button);
    setData(newData);
  };

  return (
    <>
      <div>
        <h2>Let&apos;s do some math</h2>
      </div>
      <div className="calculator">
        <Display data={data} />
        <Keypad getState={getState} />
      </div>
    </>
  );
}

export default Calculator;
