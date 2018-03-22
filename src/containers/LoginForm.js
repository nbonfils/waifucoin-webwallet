import React from 'react';

import {Row, Col} from 'antd';

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
        <Row>
          <Col span={6} offset={9}>
            <LoginField className='form-field' field='Username' />
            <br />
            <LoginField className='form-field' field='Password' />
          </Col>
        </Row>
        <Row>
          <Col span={3} offset={9} className='manage-button' >
            <ManageButton className='form-button' />
          </Col>
          <Col span={3} className='create-button' >
            <CreateButton className='form-button' />
          </Col>
        </Row>
      </form>
    );
  }
}
