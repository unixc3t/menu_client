import React, {Component} from 'react';
import {Button, Form} from "semantic-ui-react";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import * as actionCreators from '../../actions/actionCreator';
class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
    this.setState({
      email:'',
      password:''
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Email</label>
          <input name='email'
                 onChange={(e) => {
                   this.setState({email: e.target.value})
                 }}
                 value={this.state.email}
                 placeholder='Email'/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input name='password'
                 type='password'
                 onChange={(e) => {
                   this.setState({password: e.target.value})
                 }}
                 value={this.state.password}
                 placeholder='Password'/>
        </Form.Field>
        <Button type='submit'>Sign Up</Button>
      </Form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};
export default connect(null, mapDispatchToProps)(LoginPage);
