import {setUp} from "../../../Utils";
import sinon from 'sinon';
import SignupPage from './index';

describe('SignupPage',()=>{

  const signup = sinon.spy();
  const preventDefault=sinon.spy();
  const props = {
    signup
  };

  const wrapper = setUp(SignupPage,{...props});
  it('should have email input',()=>{
    expect(wrapper.find("[name='username']").length).toEqual(1);
  });
  it('should have password input',()=>{
    expect(wrapper.find("[name='password']").length).toEqual(1);
  });

  it('should call signup function when click submit button',()=>{
    wrapper.setState({
      username:'test@gmail.com',
      password:'123456'
    });
    const Form =wrapper.find('Form');
    Form.simulate('submit',{
      preventDefault
    });
    expect(signup.calledWith('test@gmail.com','123456')).toBe(true);
    expect(wrapper.state('username')).toEqual('');
    expect(wrapper.state('password')).toEqual('');
  })

});