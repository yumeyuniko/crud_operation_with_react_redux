import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    name: 'Amanda',
    email: 'amanda@mail.com',
  },
  {
    id: '2',
    name: 'John',
    email: 'John@mail.com',
  },
];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      // console.log(action);
      state.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
