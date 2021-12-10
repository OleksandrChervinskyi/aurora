import {configureStore} from "@reduxjs/toolkit";
import HeaderSlice from "../fetuares/header/headerSlice";

export const store = configureStore({
    reducer: {
        header: HeaderSlice,
        main: '',
        footer: ''
    }

})