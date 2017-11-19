'use strict'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class CheckBox extends Component {
  constructor (props) {
    super(props)
    this.state = {label: this.props.label}

}

  handleCheckBox (label,e) {
    //e.preventDefault()
    console.log(label)
  }

  fuck (hey,e){
    e.preventDefault()
    //console.log(e)
    //console.log(hey)
    let index = hey-1
    //console.log(hey)
    let curState = this.state.label
    curState[0].label2 = 'Hello world'
    //this.refs.checkbox.checked

    this.setState({
      label : curState
    })
    //console.log(document.getElementsByClassName(hey).checked)
    //console.log(ReactDOM.findDOMNode(this).parentNode.getElementsByClassName(hey)[0].checked)
    let chec = ReactDOM.findDOMNode(this).parentNode.getElementsByClassName(hey)[0].checked

    chec = !chec

    ReactDOM.findDOMNode(this).parentNode.getElementsByClassName(hey)[0].checked = chec

    console.log(curState)

    //this.state.label[hey - 1].checked
    //checked = this.refs.checkbox
  }

  render () {


    var items = this.state.label.map((data, i) => {
      return (
        <p key={data.label1} onClick={this.fuck.bind(this, data.label2)} >
        <input key={data.label2} ref='checkbox' type='checkbox' onChange={this.handleCheckBox} className={`filled-in ${data.label2}`} id='filled-in-box' />
        <label key={data.label3} htmlFor='filled-in-box'>{data.label2}-{i}</label>

        </p>

      )
      })
    return (
      <div>
        {items}
        </div>
    )
  }
}

export { CheckBox }
