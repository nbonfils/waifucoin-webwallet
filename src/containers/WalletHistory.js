import React from 'react';

import {Table} from 'antd';

/**
 * WalletHistory displays the history of transaction of this wallet
 */
export default class WalletHistory extends React.Component {
  /**
   * Render function
   * @return {Component} A table with a transaction by row
   */
  render() {
    let renderCol = (text, data) => {
      let name = data.sent ? 'tr-sent' : 'tr-rcv';
      return <span className={name}>{text}</span>;
    };

    const columns = [{
      title: 'Amount',
      dataIndex: 'amount',
      width: 100,
      render: renderCol,
    }, {
      title: 'Adress',
      dataIndex: 'adress',
      render: renderCol,
    }, {
      title: 'Date',
      dataIndex: 'date',
      render: renderCol,
    }];

    const data = [{
      amount: 234,
      adress: '0xwfc0a76c10023cf2241aa',
      date: '01/03/18',
      sent: true,
    }, {
      amount: 27,
      adress: '0xwfc0a76c10023cf2241aa',
      date: '29/02/18',
      sent: true,
    }, {
      amount: 10,
      adress: '0xwfc0a76c10023cf2241aa',
      date: '26/02/18',
      sent: false,
    }];

    return (
      <Table
        title={() => 'Transaction History'}
        columns={columns}
        dataSource={data}
      />
    );
  }
}
