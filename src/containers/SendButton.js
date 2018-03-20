import React from 'react';

import {Button} from 'antd';

/**
 * SendButton sends the wfc entered in the SendTable
 */
export default class SendButton extends React.Component {
  /**
   * Render function
   * @return {Component} A button to validate a send transaction
   */
  render() {
    return (
      <Button className='send-button' type='primary' >
        Send
        <br/>
        WFC
      </Button>
    );
  }
}
