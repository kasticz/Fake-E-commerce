import { configureStore } from "@reduxjs/toolkit";
import mousesSlice from "./mousesSlice";
import { mouseInputsSlice } from "./mousesSlice";



const store = configureStore({
    reducer: {mousesSorting: mousesSlice.reducer, mousesInputs: mouseInputsSlice.reducer}
})


export default store