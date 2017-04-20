import { global } from '../constants/actionTypes';

export const getTranslationPackage = ( language ) =>
({
  type:  'GET_JSON_LANGUAGE_PACKAGE',
  language
})
