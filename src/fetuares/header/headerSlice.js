import {createSlice} from "@reduxjs/toolkit";

const HeaderSlice = createSlice({
    name: 'header',
    initialState: {
        loginStatus: false,
        cartCount: '99',
        hamburgerMenuToggle: false,
        searchInputMob: false,
        scrollPosition: 0,
    },
    reducers: {
        setLoginStatus(state) {
            state.loginStatus = !state.loginStatus
        },
        hamburgerMenuOn(state) {
            state.hamburgerMenuToggle = true
        },
        hamburgerMenuOff(state) {
            state.hamburgerMenuToggle = false
        },
        searchInputMobToggle(state) {
            state.searchInputMob = !state.searchInputMob
        },
        setScrollPosition(state, actions) {
            state.scrollPosition = actions.payload
        },
    }
});

export const {
    setLoginStatus,
    hamburgerMenuOff,
    hamburgerMenuOn,
    searchInputMobToggle,
    setScrollPosition
} = HeaderSlice.actions

export default HeaderSlice.reducer