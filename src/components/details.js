import React, { Component } from 'react'


class Detail extends Component {
  constructor(){
    super()
    this.state = {
      label: ['asjdh', 'kakdhf', 'asdhn', 'sdjakh']
    }
  }

  handleClick (labels){
  //  console.log(labels)
  }
  render () {
    let List = this.state.label.map((labels, i) => {
      return <li key={labels} onClick={this.handleClick.bind(this, labels)}>{labels}</li>
    })
    return (
      <ul>
        {List}
      </ul>
    )
  }
}

export default Detail
