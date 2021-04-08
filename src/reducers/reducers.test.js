import messageReducer from './messageReducer';
import { UPDATE_MESSAGE } from "../actions/updateMessage";
import deepFreeze from 'deep-freeze';


describe("Messages reducer", () => {
    it(" returns the initial state at startup", () => {
        expect(messageReducer(undefined, {})).toEqual({
            message: "nein"
        })
    })

    it("updates messages when needed", ()=> {
        const initialState= {message: "nein"};

        const newMessage = "lunch";
        deepFreeze(initialState);

        expect(messageReducer(initialState, 
                {type: UPDATE_MESSAGE, payload: newMessage}))
                .toEqual({message: "lunch"})
    })
})

