import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  selectedPatient: null,
};

const patientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    setPatients: (state, action) => {
      state.list = action.payload;
    },
    selectPatient: (state, action) => {
      state.selectedPatient = action.payload;
    },
  },
});

export const { setPatients, selectPatient } = patientSlice.actions;
export default patientSlice.reducer;
