import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.isFetching = false;
            state.error = false;
        },
        loginFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;
        },
        logoutSuccess: (state, action) => {
            state.currentUser = null
            state.error = false;
        },
    },
})

export const {loginStart, loginSuccess, loginFailure, logoutSuccess} = userSlice.actions;
export default userSlice.reducer;

