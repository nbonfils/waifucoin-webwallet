import React from 'react';

import {Button} from 'antd';

/**
 * CreateButton is a button to create a new wallet
 */
export default class CreateButton extends React.Component {
  /**
   * Render function
   * @return {Component} A button
   */
  render() {
    return (
      <Button>
        Create
      </Button>
    );
  }
}
