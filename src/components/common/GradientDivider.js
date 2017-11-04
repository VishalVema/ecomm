import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './styles/GradientDivider.scss'

class GradientDivider extends Component{
	render(){
		return (<div><br/><br/><br/><div className="gradient-pattern"></div></div>);
	}
}

export {GradientDivider};
