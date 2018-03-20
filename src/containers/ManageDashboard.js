import React from 'react';

import {Row, Col} from 'antd';

import WalletBalance from './WalletBalance';
import WalletSend from './WalletSend';
import WalletHistory from './WalletHistory';

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
          <Col span={20} offset={2} >
            <WalletBalance />
          </Col>
        </Row>
        <Row>
          <Col span={20} offset={2} >
            <WalletSend />
          </Col>
        </Row>
        <Row>
          <Col span={20} offset={2} >
            <WalletHistory />
          </Col>
        </Row>
      </div>
    );
  }
}
