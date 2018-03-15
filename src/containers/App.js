import React from 'react';

import Header from './Header';
import LoginForm from './LoginForm';

/**
 * Root react component
 */
export default class App extends React.Component {
  /**
   * Constructor function
   * @constructor
   * @param {Object} props object
   */
  constructor(props) {
    super(props);
    this.state = {
      name: 'John',
    };
  }

  /**
   * Render function for a react component
   * @return {Component} The Main App component
   */
  render() {
    const content = (this.state.name == '') ? (
      <LoginForm />
    ) : (
      <LoginForm />
    );
    return (
      <div>
        <Header name={this.state.name} />
        {content}
      </div>
    );
  }
}
