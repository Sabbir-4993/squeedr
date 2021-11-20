import { hexToRgb } from "@mui/system";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  openCalender: false,

  openNavCalender: false,
  openShop: false,
  openViewinfo: false,
  openViewinfo2: false,
  openReceiveItemDrawer: false,
  openCheckOut: false,
  opensurebox: false,
  openSendMessage: false,
  openMobileSideBar: false,
  openMemberShip: false,
  openselecttime: false,
  openMemberShipRightDrawer: false,
  openEventMobileCardDrawer: false,
  openMemberShipRightDrawer2: false,
  openSpacesMobileCardDrawer: false,
  openPernetyPage: {
    open: false,
    title: "",
  },
  navCount: 2,
  openBookingConfirmation: false,
  openTextCopied: false,
  openComponent: false,
  openMobileFooterActive: {
    home: true,
    reservation: false,
    membership: false,
  },
  openDrawer: {
    eventInfo: false,
    appointmentInfo: false,
    spacesInfo: false,
    shopInfo: false,
  },
};

export const home = createSlice({
  name: "home",
  initialState: initialState,

  reducers: {
    setCalender: (state, action) => {
      state.openCalender = action.payload;
    },
    setsurebox: (state, action) => {
      state.opensurebox = action.payload;
    },

    setNavCalender: (state, action) => {
      state.openNavCalender = action.payload;
    },
    setShop: (state, action) => {
      state.openShop = action.payload;
    },
    setViewinfo: (state, action) => {
      state.openViewinfo = action.payload;
    },
    setViewinfo2: (state, action) => {
      state.openViewinfo2 = action.payload;
    },
    setReceiveItemDrawer: (state, action) => {
      state.openReceiveItemDrawer = action.payload;
    },
    setCheckOut: (state, action) => {
      state.openCheckOut = action.payload;
    },
    setselecttime: (state, action) => {
      state.openselecttime = action.payload;
    },
    setSendMessage: (state, action) => {
      state.openSendMessage = action.payload;
    },
    setMobileSideBar: (state, action) => {
      state.openMobileSideBar = action.payload;
    },
    setOpenMembership: (state, action) => {
      state.openMemberShip = action.payload;
    },
    setMemberShipRightDrawer: (state, action) => {
      state.openMemberShipRightDrawer = action.payload;
    },
    setMemberShipRightDrawer2: (state, action) => {
      state.openMemberShipRightDrawer2 = action.payload;
    },
    setEventMobileCardDrawer: (state, action) => {
      state.openEventMobileCardDrawer = action.payload;
    },
    setSpacesMobileCardDrawer: (state, action) => {
      state.openSpacesMobileCardDrawer = action.payload;
    },
    setPernetyPage: (state, action) => {
      state.openPernetyPage = action.payload;
      state.navCount = 1;
    },
    setDasboard: (state, action) => {
      state.navCount = 2;
    },
    setNavRoute: (state, action) => {
      if (action.payload) {
        state.navCount = action.payload;
      } else {
        if (state.navCount < 5) {
          state.navCount = state.navCount + 1;
        } else {
          state.navCount = state.openPernetyPage.open ? 1 : 2;
        }
      }
    },
    setBookingConfirmation: (state, action) => {
      state.openBookingConfirmation = action.payload;
    },
    setTextCopied: (state, action) => {
      state.openTextCopied = action.payload;
    },
    setComponents: (state, action) => {
      state.openComponent.title = action.payload;
    },
    setMobileFooterActive: (state, action) => {
      state.openMobileFooterActive = action.payload;
    },
    setDrawer: (state, action) => {
      state.openDrawer = action.payload;
    },
  },
});

export const {
  setCalender,
  setViewinfo,
  setsurebox,
  setViewinfo2,
  setReceiveItemDrawer,

  setCheckOut,
  setselecttime,
  setSendMessage,
  setNavCalender,
  setMobileSideBar,
  setShop,
  setOpenMembership,
  
  setMemberShipRightDrawer,
  setMemberShipRightDrawer2,
  setEventMobileCardDrawer,
  setSpacesMobileCardDrawer,
  setPernetyPage,
  setDasboard,
  setNavRoute,
  setBookingConfirmation,
  setTextCopied,
  setComponents,
  setMobileFooterActive,
  setDrawer,
} = home.actions;

export default home.reducer;
