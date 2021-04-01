import messageReducer from './messageReducer';
import UPDATE_MESSAGE from '../actions/updateMessage';
import deepFreeze from 'deep-freeze';


describe('Messages reducer', () => {
  it('should return the initial state', () => {
    expect(messageReducer(undefined, {})).toEqual({
      message: "nein"
    })
  })

  it('should handle UPDATE_MESSAGE', () => {
    const myNewState = {message: "foo"}
    deepFreeze(myNewState)

    expect(
      messageReducer(myNewState, {
        type: UPDATE_MESSAGE,
      })
    ).toEqual({
      message: "foo",
    })
  })
})