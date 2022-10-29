// // todo list
// export const todoListSelector = (state) => {
//   const todosRemaining = state.todoList.filter((todo) => {
//     return todo.name.includes(state.filters.search);
//   });

//   return todosRemaining;
// };

// // text search
// export const searchTextSelector = (state) => state.filters.search;

import { createSelector } from "reselect";

// cach khac dung thu vien reselect
export const todoListSelector = (state) => state.todoList;

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  filterStatusSelector,
  (todoList, searchText, status) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed)
      );
    });
  }
);
