import { combineReducers } from "redux";
import filtersReducer from "./slices.js/filtersSlice";
import todoListReducer from "./slices.js/todosSlice";

// const rootReducer = (state = {}, action) => {
//   console.log("rootReducer: ", { state, action });
//   return {
//     filters: filtersReducer(state.filters, action),
//     todoList: todoListReducer(state.todoList, action),
//   };
// };

// su dung combine reducers thay cho cach tren
const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListReducer,
});

export default rootReducer;
