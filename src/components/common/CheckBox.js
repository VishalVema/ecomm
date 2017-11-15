'use strict'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class CheckBox extends Component {
  constructor () {
    super()
    this.state = {
          label: [{
            label1: '1',
            label2: 'kakdhf',
            label3: 'asdhn',
            checked: 'off'
          },
          {
            label1: '2',
            label2: 'fdsaf',
            label3: 'asczvdhn',
            checked: 'off'
          },
          {
            label1: '3',
            label2: 'kakzbvcdhf',
            label3: 'aszxcvdhn',
            checked: 'off'
          }
          ]
    }
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
    //curState[index].checked = 'on'
    //this.refs.checkbox.checked
    //console.log(document.getElementsByClassName(hey).checked)
    //console.log(ReactDOM.findDOMNode(this).parentNode.getElementsByClassName(hey)[0].checked)
    let chec = ReactDOM.findDOMNode(this).parentNode.getElementsByClassName(hey)[0].checked

    chec = !chec

    ReactDOM.findDOMNode(this).parentNode.getElementsByClassName(hey)[0].checked = chec



    //this.state.label[hey - 1].checked
    //checked = this.refs.checkbox
  }

  render () {

    var items = this.state.label.map((label, i) => {
      return (
        <p key={label.label1} onClick={this.fuck.bind(this, label.label2)} >
        <input key={label.label2} ref='checkbox' type='checkbox' onChange={this.handleCheckBox} className={`filled-in ${label.label2}`} id='filled-in-box' />
        <label key={label.label3} htmlFor='filled-in-box'>{label.label2}-{i}</label>
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
