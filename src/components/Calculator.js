import React from 'react'
import calculate from '../logic/calculate'
import Screen from './Screen'

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      calculateObj: {
        total: '0',
        next: null,
        operation: null,
      },
    }
  }

  handleClick = (e) => {
    const { calculateObj } = this.state
    this.setState({
      calculateObj: calculate(calculateObj, e.target.dataset.clicked),
    })
  }

  render() {
    const mainButtons = ['AC', '+/-', '%', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.']
    const buttonsDisplay = []
    mainButtons.forEach((button) => {
      if (button === '0') {
        buttonsDisplay.push(<button type="button" className="col-md-8 Buttons p-4" key={button} data-clicked={button} onClick={this.handleClick}>{button}</button>)
      } else {
        buttonsDisplay.push(<button type="button" className="col-md-4 Buttons p-4" key={button} data-clicked={button} onClick={this.handleClick}>{button}</button>)
      }
    })

    const arithmeticButtons = ['÷', 'x', '-', '+', '=']
    const arithmeticButtonsDisplay = []
    arithmeticButtons.forEach((button) => {
      arithmeticButtonsDisplay.push(<button type="button" className="col-md-12 Arithmetic-buttons p-4" key={button} data-clicked={button} onClick={this.handleClick}>{button}</button>)
    })

    const { calculateObj } = this.state

    return (
      <div className="row">
        <div className="col-lg-4 col-md-4 mx-auto border">
          <div className="Calculator-container">
            <div className="row">
              <Screen
                total={calculateObj.total}
                next={calculateObj.next}
                operation={calculateObj.operation}
              />
            </div>
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
          </div>
        </div>
      </div>
    )
  }
}

export default Calculator
