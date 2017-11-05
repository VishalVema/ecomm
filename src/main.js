"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
//import Header from './components/common/header';
import Home from './components/home';
import List from './components/lists';
import {Header, Carousel, GradientDivider, Footer} from './components/common/index';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';




ReactDOM.render(
	<div>

			<BrowserRouter>
				<div>
					<Header logo="React Dev"/>
					<Route exact path='/' component={Home} />
					<Route path='/list' component={List} />
					<Footer />
				</div>

			</BrowserRouter>

	</div>

	, document.getElementById('root'));
