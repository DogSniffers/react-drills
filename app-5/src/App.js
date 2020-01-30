
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://i2.wp.com/weeklyworldnews.com/wp-content/uploads/2008/09/fishwithlegs.jpg?resize=500%2C194&ssl=1"} />
      </div>
    );
  }
}

export default App;