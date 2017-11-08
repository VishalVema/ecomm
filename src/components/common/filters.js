import React, { Component } from 'react'
import './styles/Filters.scss'

class Filter extends Component {
  render () {
    return (
      <div className='col l3 sidebar-shadow'>
        <ul className='collection'>
          <li className='collection-item dismissable'>
            <div>Alvin<a href='#!' className='secondary-content'><i className='material-icons'>send</i></a></div>
          </li>
          <li className='collection-item dismissable'>
            <div>Alvin<a href='#!' className='secondary-content'><i className='material-icons'>send</i></a></div>
          </li>
          <li className='collection-item dismissable'>
            <div>Alvin<a href='#!' className='secondary-content'><i className='material-icons'>send</i></a></div>
          </li>
          <li className='collection-item dismissable'>
            <div>Alvin<a href='#!' className='secondary-content'><i className='material-icons'>send</i></a></div>
          </li>
        </ul>
      </div>
    )
  }
}

export { Filter }
