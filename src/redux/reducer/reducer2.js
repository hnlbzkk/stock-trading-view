import {createSlice} from "@reduxjs/toolkit";

const initState = {
    count: 2,
}

const slice2 = createSlice({
    name: 'slice2',
    initialState: initState,
    reducers: {
        setCount(state, action) {
            state.count = action.payload
        },
    },
})

export const { setCount} = slice2.actions
export default slice2.reducer