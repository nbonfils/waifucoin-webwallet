import React from 'react';
import PropTypes from 'prop-types';

import {Row, Col} from 'antd';

import LogInfo from './LogInfo';

/**
 * Header for the application
 */
export default class Header extends React.Component {
  /**
   * Render function
   * @return {Component} A title and the login info
   */
  render() {
    return (
      <header>
        <Row>
          <Col span={10} offset={7}>
            <h1>
              WaifuCoin
            </h1>
          </Col>
          <Col span={4} offset={3}>
            <LogInfo name={this.props.name} />
          </Col>
        </Row>
      </header>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string,
};
