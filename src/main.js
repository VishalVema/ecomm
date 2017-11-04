"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
//import Header from './components/common/header';
import Home from './components/home';
import {Header, Carousel, GradientDivider, Footer} from './components/common/index';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';




ReactDOM.render(
	<div>
	<Header logo="React Dev"/>
	<Router history={browserHistory}>

	<Route path='/' component={Home} />

	</Router>
	<Footer />
	</div>

	, document.getElementById('root'));
