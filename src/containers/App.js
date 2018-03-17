import React from 'react';

import {Layout} from 'antd';
const {Header, Content, Footer} = Layout;

import AppHeader from './Header';
import LoginForm from './LoginForm';
import ManageDashboard from './ManageDashboard';

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
      <ManageDashboard />
    );
    return (
      <Layout>
        <Header>
          <AppHeader name={this.state.name} />
        </Header>

        <Content>
          {content}
        </Content>

        <Footer>
          <footer>
            Blazebone Corp ©2018 Created by Nils Bonfils
          </footer>
        </Footer>
      </Layout>
    );
  }
}
