import { configureStore } from "@reduxjs/toolkit";
import kbsSlice from "./keyboardsSlice";
import mousesSlice from "./mousesSlice";
import { mousesInputsSlice } from "./mousesSlice";
import { keyboardsInputsSlice } from "./keyboardsSlice";
import mnsSlice, { monitorsInputsSlice } from "./monitorsSlice";
import matsSlice, { matsInputsSlice } from "./matsSlice";

const store = configureStore({
  reducer: {
    mousesSorting: mousesSlice.reducer,
    mousesInputs: mousesInputsSlice.reducer,
    keyboards: kbsSlice.reducer,
    keyboardsInputs: keyboardsInputsSlice.reducer,
    monitors: mnsSlice.reducer,
    monitorsInputs: monitorsInputsSlice.reducer,
    mats: matsSlice.reducer,
    matsInputs: matsInputsSlice.reducer
  },
});

export default store;
