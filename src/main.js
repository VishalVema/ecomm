import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/header';
import Carousel from './components/common/carousel';
import GradientDivider from './components/common/gradient-divider';


ReactDOM.render(
	<div>
		<Header logo={'React Dev'} />
		<Carousel />
		<GradientDivider />
	</div>
	, document.getElementById('root'));