import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      array:['Dog','Fish','Cat']
    }
  }
  render(){
    return(
      <div> 
  <h2>{this.state.array[0]}</h2>
    <h2>{this.state.array[1]}</h2>
    <h2>{this.state.array[2]}</h2>
      </div>
    )
  }
}


export default App

