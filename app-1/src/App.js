import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App  extends Component{
  constructor(){
    super();
    this.state={
      message: ''
    }
  }
    handleChange(value){
      this.setState({message: value})
    }
  
  
  render(){
    return(
      <div>
        <input className='inputText' onChange={(e) => this.handleChange(e.target.value)}></input>
        <p>{this.state.message}</p>
        </div>
      
      
    )
  }
}
export default App

