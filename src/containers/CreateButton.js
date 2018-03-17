import React from 'react';
import PropTypes from 'prop-types';

import {Button} from 'antd';

/**
 * CreateButton is a button to create a new wallet
 */
export default class CreateButton extends React.Component {
  /**
   * Render function
   * @return {Component} A button
   */
  render() {
    return (
      <Button className={this.props.className} >
        Create
      </Button>
    );
  }
}

/**
 * Typechecking for props
 */
CreateButton.propTypes = {
  className: PropTypes.string,
};
