import React from 'react';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const mainButtons = ['AC', '+/-', '%', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
    const buttonsDisplay = [];
    mainButtons.forEach((button) => {
      if (button === '0') {
        buttonsDisplay.push(<div className="col-md-8 Buttons p-4" key={button}>{button}</div>);
      } else {
        buttonsDisplay.push(<div className="col-md-4 Buttons p-4" key={button}>{button}</div>);
      }
    });

    const arithmeticButtons = ['÷', 'x', '-', '+', '='];
    const arithmeticButtonsDisplay = [];
    arithmeticButtons.forEach((button) => {
      arithmeticButtonsDisplay.push(<div className="col-md-12 Arithmetic-buttons p-4" key={button}>{button}</div>);
    });

    return (
      <div className="row Buttons-container">
        <div className="col-md-10">
          <div className="row">
            {buttonsDisplay}
          </div>
        </div>
        <div className="col-md-2">
          <div className="row">
            {arithmeticButtonsDisplay}
          </div>
        </div>
      </div>
    );
  }
}

export default Buttons;
