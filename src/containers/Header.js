import React from 'react';
import PropTypes from 'prop-types';

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
        <LogInfo name={this.props.name} />
        <h1>
          WaifuCoin
        </h1>
      </header>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string,
};
