import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../providers/supabase";

export const fetchTodos = createAsyncThunk("todos", async () => {
  const { data, error } = await supabase.from("todos").select("*");
  if (error) throw error;
  return data;
});

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  // extraReducers: {
  //     [fetchTodos.pending]: (state)=>{
  //         state.status = "loading"
  //     },
  //     [fetchTodos.fulfilled]: (state, action)=>{
  //         state.status = "succeeded"
  //         state.todos = action.payload
  //         console.log(state.status)
  //         console.log(action.payload)
  //     },
  //     [fetchTodos.rejected]: (state, action)=>{
  //         state.status = "failed"
  //         state.error = action.error.message
  //     },
  // }

  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default todosSlice.reducer;
