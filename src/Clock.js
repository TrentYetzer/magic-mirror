import React from 'react';
import './main.css';
import moment from 'moment';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: moment().format('HH'),
      minute: moment().format('mm'),
      second: moment().format('ss'),
      day: moment().format('dddd'),
      date: moment().format('LL'),
    };
  }

  tick() {
    this.setState({
      hour: moment().format('HH'),
      minute: moment().format('mm'),
      second: moment().format('ss'),
      day: moment().format('dddd'),
      date: moment().format('LL'),
    });
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return (
      <div className="time-date-container">
        <div className="time">
          {this.state.hour}:{this.state.minute}
          <span className="seconds"> {this.state.second} </span>
        </div>
        <div className="date">
          {this.state.day} {this.state.date}
        </div>
      </div>
    );
  }
}

export default Clock;
