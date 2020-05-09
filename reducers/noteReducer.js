import {UPDATE_ROOT} from '../actions/noteAction.js'

export function noteReducer(state, { type, payload } ){
  switch (type){

    case 'changeRoot':
    // console.log('changeRoot')
    return payload
    break;

    case 'selection':
    // console.log('selection')
    break;

    default:
    return state
  }
  return state
}