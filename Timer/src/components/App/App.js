import React, { Component } from "react";
import AddTimer from '../AddTimer';
import LogicTimer from "../LogicTimer";
import Header from "../Header";

import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: '0'
    }
  }

  setTimer = (body) => {
    console.log(body)
    this.setState({
      timer: body
    })
  }

  render () {
    return (
      <>
      <Header />
      <div className='container'>
        <AddTimer setTimer={this.setTimer}/>
        <LogicTimer post={this.state.timer} setTimer={this.setTimer}/>
      </div>
      </>

    )
  }
  
};

export default App;
