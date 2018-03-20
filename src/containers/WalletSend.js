import React from 'react';

import {Row, Col} from 'antd';

import SendTable from './SendTable';
import SendButton from './SendButton';

/**
 * WalletSend allows to send an amount of wfc to an address
 */
export default class WalletSend extends React.Component {
  /**
   * Render function
   * @return {Component} A table with 2 input fields (addr + amount)
   */
  render() {
    return (
      <Row type='flex' align='middle' >
        <Col span={18} >
          <SendTable />
        </Col>
        <Col span={4} offset={2} >
          <SendButton />
        </Col>
      </Row>
    );
  }
}
