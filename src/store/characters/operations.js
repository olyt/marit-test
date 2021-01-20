import {setCharacters} from "./actions";

export const getCharacters = () => async (dispatch) => {
    const socket = new WebSocket("ws://testapi.marit.expert:3004");

    socket.onopen = () => {
        socket.send({cmd: "get_list"})
    }

    socket.onmessage = (message) => {
        const data = JSON.parse(message.data)
        dispatch(setCharacters(data));
    }
};
