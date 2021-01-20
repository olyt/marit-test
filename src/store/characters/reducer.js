import {SET_POSTS} from "./actionTypes";

const initialStore = {
    data: [],
};

const reducer = (store = initialStore, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                data: action.payload,
            };
        default:
            return store;
    }
};

export default reducer;