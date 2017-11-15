import React, { Component } from 'react'
import { RangeSlider, CheckBox } from './'
import './styles/Filters.scss'

class Filter extends Component {

  render () {
    return (
      <div className='col l3 sidebar-shadow'>
        <ul className='collection'>
          <li className='collection-item dismissable'>
            <h5> Brand </h5>
            <CheckBox />
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
