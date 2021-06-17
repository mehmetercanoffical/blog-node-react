import { combineReducers } from "redux";
import postReducar from "./postReducer";

const rootReducer = combineReducers({
    posts: postReducar,
});

export default rootReducer;