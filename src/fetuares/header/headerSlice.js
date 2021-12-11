import {createSlice} from "@reduxjs/toolkit";

const HeaderSlice = createSlice({
    name: 'header',
    initialState: {
        loginStatus: false,
        cartCount: '99',
        hamburgerMenuToggle: false,
    },
    reducers: {
        onLoginStatus(state) {
            state.loginStatus = true
        },
        offLoginStatus(state) {
            state.loginStatus = false
        },
        hamburgerMenuOn(state) {
            state.hamburgerMenuToggle = true
        },
        hamburgerMenuOff(state) {
            state.hamburgerMenuToggle = false
        },
    }
})

export const {offLoginStatus, onLoginStatus, hamburgerMenuOff,hamburgerMenuOn} = HeaderSlice.actions
export default HeaderSlice.reducer