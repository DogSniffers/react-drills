import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      username: '',
      password: ''
    }
  }
  
  usernameDisplay(val){
    this.setState({username: val})}

    passwordDisplay(val){
      this.setState({password: val})
    }
  
  render(){
    return(
      <div>
        <input onChange={(e) => this.usernameDisplay(e.target.value)}></input>
        <input onChange={(e) => this.passwordDisplay(e.target.value)}></input>
        <button className='returnValues' onClick={(e) => alert(`Username:${this.state.username} Password: ${this.state.password}`)}>Login</button>
      </div>
    )
  }
}


export default App;
