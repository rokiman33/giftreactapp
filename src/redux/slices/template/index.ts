import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITemplateProperty {
  sidebar: boolean;
  activeMenu: string;
  topActiveMenu: string;
}

const initialState: ITemplateProperty = {
  sidebar: false,
  activeMenu: '/dashboard',
  topActiveMenu: ''
};

const templateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    sidebarToggle: (state) => {
      state.sidebar = !state.sidebar;
      return state;
    },
    activateMenu: (state, _action: PayloadAction<string>) => {
      if (_action.payload === state.activeMenu)
        state.activeMenu = '';
      else {
        state.activeMenu = _action.payload;
      }
      return state;
    },
    activateTopMenu: (state, _action: PayloadAction<string>) => {
      if (_action.payload === state.topActiveMenu)
        state.topActiveMenu = '';
      else
        state.topActiveMenu = _action.payload;
      return state;
    }
  },
});

export const { sidebarToggle, activateMenu, activateTopMenu } = templateSlice.actions;

export default templateSlice.reducer;

