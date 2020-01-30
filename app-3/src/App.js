import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      array: ['Dumb','Trashcan','Fire','Heathen'],
      text: ''

    }

    
  }
  
  textChange(value){
    this.setState({text: value})
  }

  render(){
   
    var textToChange = this.state.array
    .filter((element,index) => {
    return element.includes(this.state.text)
    })
    .map((element,index) => {
    return <h2 key={index}>{element}</h2>
    });

    

    
    return(
      <div>
        <input className='inputText' onChange={(e)=> this.textChange(e.target.value)}></input>
        {textToChange}
    
      </div>
    )
  }
}

export default App;
