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
  return (
    <div className="keypad-right">
      <Button value="÷" clickFunction={getState} />
      <Button value="x" clickFunction={getState} />
      <Button value="-" clickFunction={getState} />
      <Button value="+" clickFunction={getState} />
      <Button value="=" clickFunction={getState} />
    </div>
  );
}

function KeypadLeft({ getState }) {
  return (
    <div className="keypad-left">
      <Button value="AC" clickFunction={getState} />
      <Button value="+/-" clickFunction={getState} />
      <Button value="%" clickFunction={getState} />
      <Button value="7" clickFunction={getState} />
      <Button value="8" clickFunction={getState} />
      <Button value="9" clickFunction={getState} />
      <Button value="4" clickFunction={getState} />
      <Button value="5" clickFunction={getState} />
      <Button value="6" clickFunction={getState} />
      <Button value="1" clickFunction={getState} />
      <Button value="2" clickFunction={getState} />
      <Button value="3" clickFunction={getState} />
      <Button value="0" clickFunction={getState} buttonClass="button-0" />
      <Button value="." clickFunction={getState} />
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
    <div className="display">
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
