const initState = [
  { id: 1, name: "learn Yoga", completed: false, priority: "Medium" },
  { id: 2, name: "learn Redux", completed: false, priority: "High" },
  { id: 3, name: "learn JS", completed: false, priority: "Low" },
];

const todoListReducer = (state = initState, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default todoListReducer;
