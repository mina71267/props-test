import React from 'react';
// import ReactDOM from 'react-dom';
import './style.css';

class TimerShow extends React.Component {

  render() {
    return (<><h2 className='timer'>{this.props.tittle}</h2>
    <button onClick={this.props.setNewTittle}>change</button></>)
  }
}

export default TimerShow;