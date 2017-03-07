import React from 'react'
import {render} from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App.jsx'
import PageHome from './components/page-home.jsx'
import PageWork from './components/page-work.jsx'
import PageAbout from './components/page-about.jsx'

const router = (
    <Router history={browserHistory} >
        <Route path="/" component={App}>
            <IndexRoute component={PageHome}></IndexRoute>
            <Route path="/about" component={PageAbout}></Route>
            <Route path="/works/:workId" component={PageWork}></Route>
        </Route>
    </Router>
);

render(router, document.querySelector('#app'))
