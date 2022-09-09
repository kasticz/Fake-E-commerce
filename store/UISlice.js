import { createSlice } from "@reduxjs/toolkit";

const UI = createSlice({
  name: "UI",
  initialState: {
    modalActive: false,
    login: "",
    dimensions: {clientWidht:1920,cleintHeight:1080},
    mobileNavActive:false
  },
  reducers: {
    toggleModal(state, payload) {
      const modalType = payload.payload;
      state.modalActive = modalType;
    },
    setLogin(state, payload) {
      state.login = payload.payload;
    },
    setDimensions(state, payload) {
      state.dimensions = {
        clientWidth: payload.payload.width,
        clientHeight: payload.payload.height,
      };
    },
    toggleMobileNav(state){
        state.mobileNavActive = !state.mobileNavActive
    }
  },
});
export const UIActions = UI.actions;

export default UI;
