import { global } from '../constants/actionTypes';
import createReducer from '../utils/createReducer';
import lang from '../store/localTestData/helloworldLang.json';
import { Map } from 'immutable';

const state = new Map({
  CURRENT_LANGUAGE: 'EN',
  JSON_LANGUAGE_PACKAGE: lang["EN"]
});

const types = global;


const GET_JSON_LANGUAGE_PACKAGE = ( _state, _action ) => {
  console.log(lang[_action.language])
  return _state.withMutations((ctx)=>{
    ctx.set( 'JSON_LANGUAGE_PACKAGE', lang[_action.language] )
  });
}

const handlers = {
  [ types.GET_JSON_LANGUAGE_PACKAGE ]: GET_JSON_LANGUAGE_PACKAGE
}

export default createReducer( state , handlers );
