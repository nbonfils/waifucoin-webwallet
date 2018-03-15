import React from 'react';
import PropTypes from 'prop-types';

import LogoutButton from './LogoutButton';

/**
 * LogInfo display only if a user is logged in
 */
export default class LogInfo extends React.Component {
  /**
   * Render function
   * @return {Component} Name of user and a logout button
   */
  render() {
    if (this.props.name == '') {
      return null;
    }

    return (
      <div>
        {this.props.name} <LogoutButton />
      </div>
    );
  }
}

/**
 * Typechecking for props
 */
LogInfo.propTypes = {
  name: PropTypes.string,
};
