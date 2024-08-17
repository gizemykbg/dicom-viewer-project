import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  roiSelections: [],
};

const viewerSlice = createSlice({
  name: 'viewer',
  initialState,
  reducers: {
    addRoiSelection: (state, action) => {
      state.roiSelections.push(action.payload);
    },
    removeRoiSelection: (state, action) => {
      state.roiSelections = state.roiSelections.filter(roi => roi.id !== action.payload);
    },
    resetViewer: (state) => {
      state.roiSelections = [];
    },
  },
});

export const { addRoiSelection, removeRoiSelection, resetViewer } = viewerSlice.actions;
export default viewerSlice.reducer;
