export const MESSAGE_ACTION = "MESSAGE_ACTION";

export const messageAction = (message) => {
    return dispatch => {
        dispatch({
            type: MESSAGE_ACTION,
            message: message
        })
    }
}