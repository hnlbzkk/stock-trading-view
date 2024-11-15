import {configureStore} from "@reduxjs/toolkit";
import reducer1 from "./reducer/reducer1"
import reducer2 from "./reducer/reducer2"

const store = configureStore({
    reducer: {
        slice1: reducer1,
        slice2: reducer2,
    },
});

export default store;