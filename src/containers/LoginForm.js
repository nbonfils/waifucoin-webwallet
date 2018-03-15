import React from 'react';

import LoginField from './LoginField';
import ManageButton from './ManageButton';
import CreateButton from './CreateButton';

/**
 * LoginForm is the login form in order to create or manage a wallet
 */
export default class LoginForm extends React.Component {
  /**
   * Render function
   * @return {Component} The login form with its fields and buttons
   */
  render() {
    return (
      <form>
        <LoginField field='Username' />
        <LoginField field='Password' />
        <ManageButton />
        <CreateButton />
      </form>
    );
  }
}
