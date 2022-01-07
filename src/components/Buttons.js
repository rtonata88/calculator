import React from 'react';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-10 border">
          <div className="Buttons">1</div>
          <div className="Buttons">2</div>
          <div className="Buttons">3</div>
        </div>
        <div className="col-md-2 border">
          Arithmetic
        </div>
      </div>
    );
  }
}

export default Buttons;
