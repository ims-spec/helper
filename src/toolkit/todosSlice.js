import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../supabase";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const { data, error } = await supabase.from("todos").select("*");
  if (error) throw error;

  return data;
});

export const addTodo = createAsyncThunk("todos", async ({ title, content }) => {
  const { error } = await supabase
    .from("todos")
    .insert({ title: title, content: content });
  if (error) throw new error();
});

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (todoId) => {
    const id = Number(todoId);
    const { data, error } = await supabase.from("todos").delete().eq("id", id);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }
);

export const updateTodo = createAsyncThunk(
  "toods/updateTodo",
  async ({ id, title, content }) => {
    const id2 = Number(id);
    const { error } = await supabase
      .from("todos")
      .update(title, content)
      .eq("id", id2);

    if (error) {
      throw new Error(error.message);
    }
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    status: "idle",
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.todos = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    builder.addCase(addTodo.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.todos = action.payload;
    });
    builder.addCase(addTodo.rejected, (state, action) => {
      state.status = "failed";
      state.todos = action.error.message;
    });

    builder.addCase(updateTodo.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
     console.log(state.todos)

      const updatedTodoIndex = state.todos.findIndex(
        (item) => item.id === action.payload.id
      );
      if (updatedTodoIndex !== -1) {
        state.items[updatedTodoIndex] = action.payload;
      }
      console.log("update");
      console.log(updatedTodoIndex);
    });
    builder.addCase(updateTodo.rejected, (state, action) => {
      state.status = "failed";
      state.todos = action.error.message;
      console.log(action.payload);
    });

    builder.addCase(deleteTodo.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.todos = state.todos.filter(
        (record) => record.id !== action.meta.arg
      );
    });
    builder.addCase(deleteTodo.rejected, (state, action) => {
      state.status = "failed";
      state.todos = action.payload;
    });
  },
});

export default todosSlice.reducer;
