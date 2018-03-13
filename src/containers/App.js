import React from 'react';
import Clock from './Clock';

/**
 * Root react component
 */
export default class App extends React.Component {
  /**
   * Render function for a react component
   * @return {Component} The Main App component
   */
  render() {
    return (
      <div>
        <h1>Hello, World</h1>
        <p>Je m&#39;appelle Nils :)</p>
        <Clock />
      </div>
    );
  }
}
