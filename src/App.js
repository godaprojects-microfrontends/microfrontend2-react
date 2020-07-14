import React from 'react';
import { Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import { createBrowserHistory } from 'history';
import Microfrontend2 from './Microfrontend2'

const defaultHistory = createBrowserHistory();

export default class App extends React.Component {
    
  constructor(props) {
    super(props)
    this.state = { results: props } ;
  }

  render(){
    return (
      <Microfrontend2 data={this.props}/>
    )
  }
}



