import React from 'react'
import PropTypes from 'prop-types'

class Screen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const { total, next, operation } = this.props
    return (
      <div className="Screen p-4">
        {total}
        {operation}
        {next}
      </div>
    )
  }
}
Screen.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
}

Screen.defaultProps = {
  total: '',
  next: '',
  operation: '',
}

export default Screen
