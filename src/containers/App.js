import React from 'react';

import {Layout} from 'antd';

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
      <Layout>
        <Layout.Header>
          <Header name={this.state.name} />
        </Layout.Header>

        <Layout.Content>
          {content}
        </Layout.Content>

        <Layout.Footer>
          <footer>
            Blazebone Corp ©2018 Created by Nils Bonfils
          </footer>
        </Layout.Footer>
      </Layout>
    );
  }
}
