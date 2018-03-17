import React from 'react';

import {Row, Col} from 'antd';

import WalletBalance from './WalletBalance';
import WalletSend from './WalletSend';

/**
 * ManageDashboard is the dashboard displaying info about your wallet
 */
export default class ManageDashboard extends React.Component {
  /**
   * Render function
   * @return {Component} The dashboard component
   */
  render() {
    return (
      <div>
        <Row>
          <Col>
            <WalletBalance />
          </Col>
        </Row>
        <Row>
          <Col>
            <WalletSend />
          </Col>
        </Row>
      </div>
    );
  }
}
