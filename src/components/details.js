import React, { Component } from 'react'


class Detail extends Component {
  state = {
        label: 'hello'
      }

  handleClick = () => {
  this.setState({
      label: 'hello world'
  });
  }

  render () {
    return (
      <div>
       <button onClick={this.handleClick}>
         Button 1
       </button>

       <h1>{this.state.text}</h1>
       <h1>{this.state.label}</h1>
     </div>

    )
  }
}

export default Detail
