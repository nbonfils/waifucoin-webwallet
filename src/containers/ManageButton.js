import React from 'react';
import PropTypes from 'prop-types';

import {Button} from 'antd';

/**
 * ManageButton is a button to access the manage dashboard
 */
export default class ManageButton extends React.Component {
  /**
   * Render function
   * @return {Component} A button
   */
  render() {
    return (
      <Button className={this.props.className} type='primary'>
        Manage
      </Button>
    );
  }
}

/**
 * Typechecking for props
 */
ManageButton.propTypes = {
  className: PropTypes.string,
};
