import './sass/App.scss'

import React from 'react'
import { Link } from 'react-router';

import Header from './components/header/index.jsx';

let App = React.createClass({
  render() {
    return (
      <div className="container">
        <Header />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
})

export default App


