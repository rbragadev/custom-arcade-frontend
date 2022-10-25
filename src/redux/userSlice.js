import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: {
    theme: '',
    pack: '',
  },
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
    changePack: (state, action) => {
      state.pack = action.payload;
    },
  },
});

export const { changeTheme, changePack } = slice.actions;

export const selectUser = (state) => state.user;

export default slice.reducer;
