import {SET_POSTS} from "./actionTypes";

export const setCharacters = (newCharacters) => ({
    type: SET_POSTS,
    payload: newCharacters,
});
