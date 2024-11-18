import {combineReducers} from 'redux'
import reducer1 from "../slice/reducer1";
import authSlice from "../slice/authSlice";

const RootReducer = combineReducers({
    authSlice: authSlice,
    state1: reducer1,
})