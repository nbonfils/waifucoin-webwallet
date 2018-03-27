import React from 'react';
import PropTypes from 'prop-types';

import {Row, Col, Button, Form} from 'antd';
const FormItem = Form.Item;

import LoginField from './LoginField';

/**
 * LoginForm is the login form in order to create or manage a wallet
 */
class LoginForm extends React.Component {
  /**
   * Constructor function
   * @constructor
   * @param {Object} props object
   */
  constructor(props) {
    super(props);

    this.handleManage = this.handleManage.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  /**
   * Handles when click on "Manage" button
   * @param {Object} e is the event
   */
  handleManage(e) {
    e.preventDefault();

    const {validateFields} = this.props.form;

    validateFields((err, values) => {
      if (!err) {
        console.log('values: ', values);
      }
    });
  }

  /**
   * Handles when click on "Create" button
   * @param {Object} e is the event
   */
  handleCreate(e) {
  }

  /**
   * Render function
   * @return {Component} The login form with its fields and buttons
   */
  render() {
    const {getFieldDecorator} = this.props.form;

    return (
      <Form>
        <Row>
          <Col span={6} offset={9}>
            <FormItem>
              {
                getFieldDecorator('username', {
                  initialValue: '',
                  rules: [{
                    required: true,
                    message: 'Please input your Username!',
                  }],
                })(
                  <LoginField className='form-field' field='Username' />
                )
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('password', {
                  initialValue: '',
                  rules: [{
                    required: true,
                    message: 'Please input your Password!',
                  }],
                })(
                  <LoginField className='form-field' field='Password' />
                )
              }
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={3} offset={9} className='manage-button' >
            <FormItem>
              <Button
                onClick={this.handleManage}
                className='form-button'
                type='primary'
              >
                Manage
              </Button>
            </FormItem>
          </Col>
          <Col span={3} className='create-button' >
            <FormItem>
              <Button
                onClick={this.handleCreate}
                className='form-button'
              >
                Create
              </Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
    );
  }
}

/**
 * Typechecking for props
 */
LoginForm.propTypes = {
  form: PropTypes.object,
};

const WrappedLoginForm = Form.create()(LoginForm);
export default WrappedLoginForm;
