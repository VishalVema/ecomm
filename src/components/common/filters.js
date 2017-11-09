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
            <CheckBox keyProps={1} CheckBoxLabel='Puma' />
            <CheckBox keyProps={2} CheckBoxLabel='Reebok' />
            <CheckBox keyProps={3} CheckBoxLabel='Adidas' />
            <CheckBox keyProps={4} CheckBoxLabel='Woodland' />
            <CheckBox keyProps={5} CheckBoxLabel='Puma' />
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
