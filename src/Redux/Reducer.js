import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  openMemberShip: false,
  // openselecttime: false,
};

export const mobileSideBar = createSlice({
  name: "mobileSideBar",
  initialState: initialState,

  reducers: {
    setSliderOpen: (state, action) => {
      // console.log("action and state", state, action);
      state.open = action.payload;
    },
    // setselecttime: (state, action) => {
    //   state.openselecttime = action.payload;
    // },
    setOpenMembership: (state, action) => {
      state.openMemberShip = action.payload;
    },
  },
});

export const { setSliderOpen, setOpenMembership} =
  mobileSideBar.actions;

export default mobileSideBar.reducer;
