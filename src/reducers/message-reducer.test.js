import messageReducer from './messageReducer';
import {UPDATE_MESSAGE}  from '../actions/updateMessage';
import deepFreeze from 'deep-freeze';

const reducer = messageReducer;

describe('Messages reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      message: "nein"
    })
  })

  it('should handle UPDATE_MESSAGE', () => {
    const actioni = {type: UPDATE_MESSAGE, payload: "Friday"};
    // const oldstate = {message: "nein"};

    // deepFreeze(oldstate);

    expect(reducer(null, actioni )).toEqual({
      message: "Friday"
    })
  })
})