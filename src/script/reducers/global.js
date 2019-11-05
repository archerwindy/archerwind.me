import { global } from '../constants/actionTypes';
import createReducer from '../utils/createReducer';
import { Map } from 'immutable';

const state = new Map({
  CURRENT_LANGUAGE: 'EN',
});

const types = global;


const GET_JSON_LANGUAGE_PACKAGE = ( _state, _action ) => {
  return _state.withMutations((ctx)=>{
  });
}

const handlers = {
  [ types.GET_JSON_LANGUAGE_PACKAGE ]: GET_JSON_LANGUAGE_PACKAGE
}

export default createReducer( state , handlers );
