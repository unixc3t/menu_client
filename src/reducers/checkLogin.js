import {LOGIN} from "../actions/actionType";

const initialState = {
  user:{}
};

export default function checkLogin(state=initialState, action){
  switch (action.type) {
    case LOGIN:
      return {...state, ...action.payload};
    default:
      return state;
  }
}