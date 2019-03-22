import {callLogin} from "./index";
import {app} from '../store';
import {login} from "../services/api";
import {call, put} from 'redux-saga/effects';

describe('loginSaga', () => {
  const action = {
    email: 'test@gmail.com',
    password: '123456'
  };
  const gen = callLogin(app, action);

  it('should call login', () => {
    expect(gen.next().value).toEqual(call(login, app, action.email, action.password));
  })

});