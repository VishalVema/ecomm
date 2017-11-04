import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Carousel, GradientDivider} from './common'


class Home extends Component{
  render(){
    return (
      <div>
      <Carousel />
      <GradientDivider />
      </div>
    );
  }
}

export default Home;
