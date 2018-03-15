import React from 'react';

import {Button} from 'antd';

/**
 * ManageButton is a button to access the manage dashboard
 */
export default class LoginField extends React.Component {
  /**
   * Render function
   * @return {Component} A button
   */
  render() {
    return (
      <Button type='primary'>
        Manage
      </Button>
    );
  }
}
