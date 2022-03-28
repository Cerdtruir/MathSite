import React from 'react';

class Button extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className={this.props.class}>
        <p>{this.props.value}</p>
      </div>
    );
  }
}

Button.defaultProps = {
  class: 'button',
};

class KeypadRight extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='keypad-right'>
        <Button value='/' />
        <Button value='*' />
        <Button value='-' />
        <Button value='+' />
        <Button value='=' />
      </div>
    );
  }
}

class KeypadLeft extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='keypad-left'>
        <Button value='AC' />
        <Button value='+/-' />
        <Button value='%' />
        <Button value='7' />
        <Button value='8' />
        <Button value='9' />
        <Button value='4' />
        <Button value='5' />
        <Button value='6' />
        <Button value='1' />
        <Button value='2' />
        <Button value='3' />
        <Button value='0' class='button-0' />
        <Button value='.' />
      </div>
    );
  }
}

class Keypad extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='keypad'>
        <KeypadLeft />
        <KeypadRight />
      </div>
    );
  }
}

class Display extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='display'>
        <p>0</p>
      </div>
    );
  }
}

class Calculator extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='calculator'>
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
