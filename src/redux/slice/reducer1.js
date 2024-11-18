import {createSlice} from "@reduxjs/toolkit";

const initState = {
    num: 0,
}

const slice1 = createSlice({
    name: 'slice1',
    initialState: initState,
    reducers: {
        increment(state, action) {
            state.num += action.payload;
        },
        decrement(state) {
            state.num--;
        },
    },
})

export const { increment, decrement} = slice1.actions;
export default slice1.reducer