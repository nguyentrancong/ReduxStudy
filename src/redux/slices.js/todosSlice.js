import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initState = [
//   {
//     id: "e3d68094-6250-4ba5-8bcf-bf4c468673da",
//     name: "learn Yoga",
//     completed: false,
//     priority: "Medium",
//   },
//   {
//     id: "e3d68094-6250-4ba5-8bcf-bf4c568673da",
//     name: "learn Redux",
//     completed: true,
//     priority: "High",
//   },
//   {
//     id: "e3d68094-6250-4ba5-8bcf-bf4c668673da",
//     name: "learn JS",
//     completed: false,
//     priority: "Low",
//   },
// ];

// const todoListReducer = (state = initState, action) => {
//   console.log({ state, action });
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];

//     case "todoList/toggleTodoStatus":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );

//     default:
//       return state;
//   }
// };

// export default todoListReducer;

// Using redux toolkit
const todosSlice = createSlice({
  name: "todoList",
  initialState: {
    status: "idle",
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    }, // {type: "todoList/addTodo"}

    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    }, // {type: "todoList/toggleTodoStatus"}
  },
  // implement thunk
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "idle";
        state.todos = action.payload;
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        let currentTodo = state.todos.find(
          (todo) => todo.id === action.payload.id
        );
        if (currentTodo) {
          currentTodo.completed = action.payload.completed;
        }
      });
  },
});

export default todosSlice;

/**
 * createAsyncThunk: se co 3 trang thai:
 * => todos/fetchTodos/pending
 * => todos/fetchTodos/fullfilled
 * => todos/fetchTodos/rejected
 */
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await fetch("/api/todos");
  const data = await res.json();
  return data.todos;
});

export const addNewTodo = createAsyncThunk(
  "todos/addNewTodo",
  async (newTodo) => {
    const res = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify(newTodo),
    });

    const data = await res.json();
    console.log({ data });
    return data.todos;
  }
);

export const updateTodo = createAsyncThunk("todos/updateTodo", async (id) => {
  const res = await fetch("/api/updateTodo", {
    method: "POST",
    body: JSON.stringify(id),
  });

  const data = await res.json();
  console.log("[updateTodo]", { data });
  return data.todos;
});

// implement thunk
// =>> thunk action => function

export function addTodos(todo) {
  return function addTodosThunk(dispatch, getState) {
    console.log("[addTodosThunk] ", getState());
    console.log({ todo });

    todo.name = "Nguyen update";
    dispatch(todosSlice.actions.addTodo(todo));
  };
}
