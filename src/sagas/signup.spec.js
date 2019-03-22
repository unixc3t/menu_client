import {callSignUp} from "./index";
import {app} from '../store';
import {signup} from "../services/api";
import {call,put} from 'redux-saga/effects';

describe('SignSaga',()=>{

  const action={
    email:'test@gmail.com',
    password:'123456'
  };
  const gen =  callSignUp(app,action);

  it('should call signup',()=>{
    expect(gen.next().value).toEqual(call(signup, app,action.email,action.password));
  });
});