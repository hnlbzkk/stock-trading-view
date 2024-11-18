import {createSlice} from "@reduxjs/toolkit";

const initState = {
    token: null,
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initState,
    reducers: {
        setToken(state, action) {
            state.token = action.payload
            state.isAuthenticated = true
        },
        clearToken: (state) => {
            state.token = null;
            state.isAuthenticated = false;
        },
    },
})

export const { setToken, clearToken } = authSlice.actions
export default authSlice.reducer