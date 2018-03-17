import React from 'react';
import PropTypes from 'prop-types';

import {Input, Icon} from 'antd';

/**
 * LoginField is a field for a specific input for the login form
 */
export default class LoginField extends React.Component {
  /**
   * Render function
   * @return {Component} A label with an input field
   */
  render() {
    let icon;
    switch (this.props.field) {
      case 'Username':
        icon = <Icon type='user' />;
        break;
      case 'Password':
        icon = <Icon type='lock' />;
        break;
      default:
        icon = null;
    }

    return (
      <Input
        className={this.props.className}
        placeholder={this.props.field}
        type={this.props.field == 'Password' ? 'password' : 'text'}
        prefix={icon}
      />
    );
  }
}

/**
 * Typechecking for props
 */
LoginField.propTypes = {
  className: PropTypes.string,
  field: PropTypes.string,
};
