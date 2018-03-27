import React from 'react';
import PropTypes from 'prop-types';

import {Input, Icon} from 'antd';

/**
 * LoginField is a field for a specific input for the login form
 */
export default class LoginField extends React.Component {
  /**
   * Constructor function
   * @constructor
   * @param {Object} props object
   */
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value || '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Component lifecycle method
   * @param {Object} nextProps object
   */
  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      const value = nextProps.value;
      this.setState({
        value: value,
      });
    }
  }

  /**
   * Handles change in the Input field
   * @param {Object} e is the event
   */
  handleChange(e) {
    const value = e.target.value;
    if (!('value' in this.props)) {
      this.setState({value});
    }

    this.triggerChange(value);
  }

  /**
   * Event to pass value to Form
   * @param {String} changedValue is the value that changed
   */
  triggerChange(changedValue) {
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(changedValue);
    }
  }

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
        value={this.state.value}
        onChange={this.handleChange}
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
  value: PropTypes.string,
  onChange: PropTypes.func,
};
