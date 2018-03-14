import React from 'react';

import Header from './Header';

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
        <Header name='test' />
      </div>
    );
  }
}
