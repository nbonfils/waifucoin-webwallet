import React from 'react';

import {Table, Input} from 'antd';

/**
 * SendTable display input fields to send wfc
 */
export default class SendTable extends React.Component {
  /**
   * Render function
   * @return {Component} A table with 2 rows which presents input fields
   */
  render() {
    const columns = [{
      title: 'Field',
      dataIndex: 'field',
      width: 150,
      render: (text) => <strong>{text}</strong>,
    }, {
      title: 'Input',
      dataIndex: 'input',
      render: (text) => <Input className='send-input' placeholder={text} />,
    }];

    const data = [{
      key: '1',
      field: 'Send to',
      input: 'Adress',
    }, {
      key: '2',
      field: 'Amount',
      input: 'Amount',
    }];

    return (
      <Table
        columns={columns}
        dataSource={data}
        showHeader={false}
        pagination={false}
        bordered
      />
    );
  }
}
