import React from 'react';
import Screen from './Screen';
import Buttons from './Buttons';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-4 col-md-4 mx-auto border">
          <div className="Calculator-container">
            <Screen />
            <Buttons />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
