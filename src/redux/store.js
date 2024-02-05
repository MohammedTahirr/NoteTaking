import {configureStore} from '@reduxjs/toolkit';
import NoteSlice from './features/NoteSlice';

const store = configureStore({
  reducer: {
    Notes: NoteSlice,
  },
});

export default store;
