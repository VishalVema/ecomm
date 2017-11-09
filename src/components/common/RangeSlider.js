import React, { Component } from 'react'
import InputRange from 'react-input-range'
import 'react-input-range/src/scss/index.scss'

class RangeSlider extends Component {

  constructor(props) {
     super(props);

     this.state = {
        value: { min: 2, max: 200 }
     }
     this.updateState = this.updateState.bind(this);
  };
  updateState(e) {

     this.setState({value: e});
     console.log(this.state.value);
  }

  render () {
    return (
      <form className="form">
      <InputRange
       maxValue={200}
       minValue={0}
       value={this.state.value}
       onChange={this.updateState} />
     </form>
    )
  }
}

export { RangeSlider }
