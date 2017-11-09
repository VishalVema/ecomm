import React, { Component } from 'react'
import { Card, Filter } from './common'

class List extends Component {
  render () {
    return (
      <div className='row'>
        <Filter />
        <Card />
      </div>

    )
  }
}

export default List
