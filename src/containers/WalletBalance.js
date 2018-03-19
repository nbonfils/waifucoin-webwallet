import React from 'react';

import {Table} from 'antd';

/**
 * WalletBalance displays the balance of the wallet
 */
export default class WalletBalance extends React.Component {
  /**
   * Render function
   * @return {Component} A kind of small table displaying the wallet balance
   */
  render() {
    const columns = [{
      title: 'Currency',
      dataIndex: 'currency',
      width: 100,
      render: (text) => <strong>{text}</strong>,
    }, {
      title: 'Amount',
      dataIndex: 'amount',
    }];

    return (
      <Table
        title={() => 'Balance'}
        columns={columns}
        dataSource={[{key: '1', currency: 'WFC', amount: '1000.00'}]}
        showHeader={false}
        pagination={false}
        bordered
      />
    );
  }
}
