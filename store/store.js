import { configureStore } from "@reduxjs/toolkit";
import kbsSlice from "./keyboardsSlice";
import mousesSlice from "./mousesSlice";
import { mousesInputsSlice } from "./mousesSlice";
import { keyboardsInputsSlice } from "./keyboardsSlice";
import mnsSlice, { monitorsInputsSlice } from "./monitorsSlice";
import matsSlice, { matsInputsSlice } from "./matsSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    mouses: mousesSlice.reducer,
    mousesInputs: mousesInputsSlice.reducer,
    keyboards: kbsSlice.reducer,
    keyboardsInputs: keyboardsInputsSlice.reducer,
    monitors: mnsSlice.reducer,
    monitorsInputs: monitorsInputsSlice.reducer,
    mats: matsSlice.reducer,
    matsInputs: matsInputsSlice.reducer,
    cart: cartSlice.reducer
  },
});

export default store;
