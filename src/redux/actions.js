// Action : ko nen viet do co the bi lap di lap lai
// export const addTodoAction = {
//   type: "todoList/AddTodo",
//   payload: { id: 4, name: "learn SX", completed: false, priority: "Low" },
// };

import filtersSlice from "./slices.js/filtersSlice";
import todosSlice from "./slices.js/todosSlice";

// Action creators => function => thay cac viet tren bang bang cach duoi
// export const addTodo = (data) => {
//   return {
//     type: "todoList/addTodo",
//     payload: data,
//   };
// };

// export const toggleTodoStatus = (id) => {
//   return {
//     type: "todoList/toggleTodoStatus",
//     payload: id,
//   };
// };

// export const searchFilterChange = (text) => {
//   return {
//     type: "filters/searchFilterChange",
//     payload: text,
//   };
// };

// export const statusFilterChange = (status) => {
//   return {
//     type: "filters/statusFilterChange",
//     payload: status,
//   };
// };

// export const prioritiesFilterChange = (priorities) => {
//   return {
//     type: "filters/prioritiesFilterChange",
//     payload: priorities,
//   };
// };

// Using redux toolkit
export const {
  prioritiesFilterChange,
  searchFilterChange,
  statusFilterChange,
} = filtersSlice.actions;

export const { addTodo, toggleTodoStatus } = todosSlice.actions;
