'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/home'
import List from './components/lists'
import Detail from './components/details'
import { Header, Footer } from './components/common/index'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { BrowserRouter, Switch } from 'react-router-dom'




ReactDOM.render(
  <div>
    <BrowserRouter>
      <div>
        <Header logo='React Dev' />
        <Route exact path='/' component={Home} />
        <Route path='/list' component={List} />
        <Route path='/detail' component={Detail} />
        <Footer />
      </div>

    </BrowserRouter>
  </div>

, document.getElementById('root'));
