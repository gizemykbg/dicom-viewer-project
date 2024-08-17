import { configureStore } from '@reduxjs/toolkit';
import patientReducer from './slices/patientSlice';
import viewerReducer from './slices/viewerSlice';

const store = configureStore({
    reducer: {
      viewer: viewerReducer,
      patient: patientReducer,
    },
});

export default store;
