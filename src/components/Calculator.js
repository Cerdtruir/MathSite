/* eslint-disable react/prop-types */
import React from 'react';

function Button(props) {
  return (
    <div className={props.class}>
      <p>{props.value}</p>
    </div>
  );
}

Button.defaultProps = {
  class: 'button',
};

function KeypadRight() {
  return (
    <div className="keypad-right">
      <Button value="/" />
      <Button value="*" />
      <Button value="-" />
      <Button value="+" />
      <Button value="=" />
    </div>
  );
}

function KeypadLeft() {
  return (
    <div className="keypad-left">
      <Button value="AC" />
      <Button value="+/-" />
      <Button value="%" />
      <Button value="7" />
      <Button value="8" />
      <Button value="9" />
      <Button value="4" />
      <Button value="5" />
      <Button value="6" />
      <Button value="1" />
      <Button value="2" />
      <Button value="3" />
      <Button value="0" class="button-0" />
      <Button value="." />
    </div>
  );
}

function Keypad() {
  return (
    <div className="keypad">
      <KeypadLeft />
      <KeypadRight />
    </div>
  );
}

function Display() {
  return (
    <div className="display">
      <p>0</p>
    </div>
  );
}

class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <Display />
        <Keypad>
          <KeypadLeft />
          <KeypadRight />
        </Keypad>
      </div>
    );
  }
}

export default Calculator;
