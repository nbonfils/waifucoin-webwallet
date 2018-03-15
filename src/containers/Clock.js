import React from 'react';

/**
 * A simple Clock that gives the time
 */
export default class Clock extends React.Component {
  /**
   * Clock constructor
   * @constructor
   * @param {Object} props object
   */
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  /**
   * React mount hook
   */
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  /**
   * React unmount hook
   */
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  /**
   * Update the state of the clock
   */
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  /**
   * Renders the Clock
   * @return {Component} The Clock component
   */
  render() {
    return (
      <h2>{this.state.date.toLocaleTimeString()}</h2>
    );
  }
}
