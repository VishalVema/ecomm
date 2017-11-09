'use strict'

import React, { Component } from 'react'

class CheckBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: true
    }

    this.handleCheckBox = this.handleCheckBox.bind(this)
  }

  handleCheckBox (event) {
    console.log(event)

    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    console.log(value)
    this.setState({
      checked: value
    })
  }

  render () {

    return (
      <p>
         <input type='checkbox' className='filled-in' id='filled-in-box' onChange={this.handleCheckBox} checked={this.state.checked} />
         <label htmlFor='filled-in-box'>{this.props.CheckBoxLabel}</label>
       </p>
    )
  }
}

export { CheckBox }
