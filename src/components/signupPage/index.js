import React, {Component} from 'react';
import {Button, Form} from 'semantic-ui-react';
import {bindActionCreators} from "redux";
import * as actionCreators from '../../actions/actionCreator';
import {connect} from 'react-redux';
class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state.username, this.state.password);
    this.setState({
      username:'',
      password:''
    })
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Email</label>
          <input name='username'
                 onChange={(e)=>{this.setState({username:e.target.value})}}
                 value={this.state.username}
                 placeholder='Email'/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input name='password'
                 type='password'
                 onChange={(e)=>{this.setState({password:e.target.value})}}
                 value={this.state.password}
                 placeholder='Password'/>
        </Form.Field>
        <Button type='submit'>Sign Up</Button>
      </Form>
    );
  };
}
const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators,dispatch);
};

export default  connect(mapStateToProps,mapDispatchToProps)(SignupPage);