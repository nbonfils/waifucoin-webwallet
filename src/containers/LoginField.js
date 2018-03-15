import React from 'react';
import PropTypes from 'prop-types';

/**
 * LoginField is a field for a specific input for the login form
 */
export default class LoginField extends React.Component {
  /**
   * Render function
   * @return {Component} A label with an input field
   */
  render() {
    return (
      <div>
        <label htmlFor={this.props.field}>
          {this.props.field}
        </label>
        <input id={this.props.field} type='text' />
      </div>
    );
  }
}

/**
 * Typechecking for props
 */
LoginField.propTypes = {
  field: PropTypes.string,
};
