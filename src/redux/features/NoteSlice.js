import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  Notes: [],
};

const NoteSlice = createSlice({
  name: 'Notes',
  initialState,
  reducers: {
    setNotesData(state, action) {
      state.Notes = action.payload;
    },
  },
  extraReducers: builder => {},
});

export const {setNotesData} = NoteSlice.actions;

export default NoteSlice.reducer;
