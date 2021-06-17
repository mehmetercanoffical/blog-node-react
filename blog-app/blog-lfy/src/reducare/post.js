import * as types from "../actions/types";

const initialState = {
    post: [],
};

const postReducar = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POST:
            return {
                ...state,
                post: action.payloand,
            }

        default:
            return {
                ...state,
            }
    }
}

export default postReducar;