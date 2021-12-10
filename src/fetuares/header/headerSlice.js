import {createSlice} from "@reduxjs/toolkit";

const HeaderSlice = createSlice({
    name: 'header',
    initialState: {
        loginStatus: false,
        cartCount : '99',
    },
    reducers: {
        onLoginStatus(state) {
            state.loginStatus = true
        },
        offLoginStatus(state) {
            state.loginStatus = false
        },
    }
})

export const {offLoginStatus, onLoginStatus} = HeaderSlice.actions
export default HeaderSlice.reducer