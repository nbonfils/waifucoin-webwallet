import React from 'react';
import Cookies from 'universal-cookie';

import {Button} from 'antd';

/**
 * LogoutButton logout the user (cookies based auth)
 */
export default class LogoutButton extends React.Component {
  /**
   * logout the user
   */
  logout() {
    const cookies = new Cookies();
    cookies.remove('login');
  }

  /**
   * Render function
   * @return {Component} A logout button
   */
  render() {
    return (
      <Button type='primary' icon='logout' onClick={this.logout}>
        Logout
      </Button>
    );
  }
}
