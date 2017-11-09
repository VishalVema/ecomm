'use strict'

import React, { Component } from 'react'

class Chip extends Component {
  render () {
    //console.log(this.props.ChipLabel)
    return (
      <div className='chip pink white-text'>
        { this.props.ChipLabel }
      </div>
    )
  }
}

export { Chip }
