const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchTodos = createAsyncThunk("data/fetchTodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  return data;
});

const todoApiCallSlice = createSlice({
  name: "todoApiCall",
  initialState: {
    data: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
      state.status = "loading";
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = "idle";
      state.data = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.status = "error";
    });
  },
});

export const { increment, decrement, incrementByAmount } =
  todoApiCallSlice.actions;

export default todoApiCallSlice.reducer;

//extra reducers are used to handle async actions like api calls and builders are used to handle multiple actions

//fullfilled is used to handle the success case of the api call

//pending is used to handle the loading case of the api call

//rejected is used to handle the error case of the api call
