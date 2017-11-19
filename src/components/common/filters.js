import React, { Component } from 'react'
import { RangeSlider, CheckBox } from './'
import './styles/Filters.scss'

class Filter extends Component {

  constructor(){
    super ()
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

  render () {
    return (
      <div className='col l3 sidebar-shadow'>
        <ul className='collection'>
          <li className='collection-item dismissable'>
            <h5> Brand </h5>
            <CheckBox label={this.state.label} />
          </li>
          <li className='collection-item dismissable'>
            <h5> Discount </h5>
          </li>
          <li className='collection-item dismissable'>
            <div>Alvin<a href='#!' className='secondary-content'><i className='material-icons'>send</i></a></div>
          </li>
          <li className='collection-item dismissable'>
            <RangeSlider />
          </li>
        </ul>
      </div>
    )
  }
}

export { Filter }
