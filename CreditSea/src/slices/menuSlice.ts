import { createSlice } from '@reduxjs/toolkit';

export interface MenuState {
  state: boolean
}

// Define the initial state using that type
const initialState: MenuState = {
  state: false
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    change: (state) => {
      if (state.state === false) {
        state.state = true;
      } else {
        state.state = false;
      }
    }
  }
})

export const { change } = menuSlice.actions;

export default menuSlice.reducer;