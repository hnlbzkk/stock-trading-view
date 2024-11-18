import {configureStore} from "@reduxjs/toolkit";
import reducer1 from "./slice/reducer1"
import authSlice from "./slice/authSlice"

const store = configureStore({
    reducer: {
        slice1: reducer1,
        authSlice: authSlice,
    },
});

export default store;