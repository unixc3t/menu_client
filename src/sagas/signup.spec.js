import {callSignUp} from "./index";
import {app} from '../store';
import {signup} from "../services/api";
import {call,put} from 'redux-saga/effects';
import * as router from 'react-router'
import {Router} from 'react-router-dom';

describe('SignSaga',()=>{
  const action={
    username:'test@gmail.com',
    password:'123456'
  };
  const gen =  callSignUp(app,action);

  it('should call signup',()=>{
    expect(gen.next().value).toEqual(call(signup, app,action.username,action.password));
  })

});