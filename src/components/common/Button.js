'use strict'

import React, { Component } from 'react'

class Button extends Component {
  render () {

    return (
      <a className={`waves-effect waves-light btn ${this.props.ButtonPadding}`}>{ this.props.ButtonLabel }</a>
    )
  }
}

export { Button }
