import {setCharacters} from "./actions";

export const getCharacters = (socket) => async (dispatch) => {
    socket.onopen = () => {
        socket.send({cmd: "get_list"})
    }

    socket.onmessage = (message) => {
        const data = JSON.parse(message.data)
        dispatch(setCharacters(data));
    }
};
