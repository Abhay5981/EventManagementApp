import { createSlice } from '@reduxjs/toolkit';

const viewSlice = createSlice({
  name: 'view',
  initialState: {
    isDashboardOpen: false,
    activePage: "",
  },
  reducers: {
    toggleDashboard: (state) => {
      state.isDashboardOpen = !state.isDashboardOpen;
    },
   
  },
});

export const { toggleDashboard, setActivePage } = viewSlice.actions;
export default viewSlice.reducer;