import React from 'react';
import './style.css';
import MessageTimer from "./MessageTimer";
import TimerShow from "./TimerShow";



class App extends React.Component {
  constructor(){
    super()
    this.state = {
      tittle: 'hello mina jojo' ,
     
    }
  }

  setNewTittle =()=>{
    this.setState({
      tittle:"welcome"
    })
  }
    render() {
      return (<div className='main'> <MessageTimer /><TimerShow tittle={this.state.tittle} setNewTittle={this.setNewTittle}/> </div>)
    }
  }

  export default App;