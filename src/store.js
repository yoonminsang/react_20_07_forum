import { configureStore, createSlice } from "@reduxjs/toolkit";

const login = createSlice({
  name: "loginReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

export const { add, remove } = login.actions;

export default configureStore({ reducer: login.reducer });
