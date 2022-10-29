// Action : ko nen viet do co the bi lap di lap lai
// export const addTodoAction = {
//   type: "todoList/AddTodo",
//   payload: { id: 4, name: "learn SX", completed: false, priority: "Low" },
// };

// Action creators => function => thay cac viet tren bang bang cach duoi
export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: "filters/searchFilterChange",
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "filters/statusFilterChange",
    payload: status,
  };
};

export const prioritiesFilterChange = (priorities) => {
  return {
    type: "filters/prioritiesFilterChange",
    payload: priorities,
  };
};
