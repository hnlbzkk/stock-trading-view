import {combineReducers} from 'redux'
import reducer1 from "./reducer/reducer1";
import reducer2 from "./reducer/reducer2";

const RootReducer = combineReducers({
    state1: reducer1,
    state2: reducer2,
})