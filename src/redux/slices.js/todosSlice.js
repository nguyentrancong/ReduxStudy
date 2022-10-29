const initState = [
  {
    id: "e3d68094-6250-4ba5-8bcf-bf4c468673da",
    name: "learn Yoga",
    completed: false,
    priority: "Medium",
  },
  {
    id: "e3d68094-6250-4ba5-8bcf-bf4c568673da",
    name: "learn Redux",
    completed: true,
    priority: "High",
  },
  {
    id: "e3d68094-6250-4ba5-8bcf-bf4c668673da",
    name: "learn JS",
    completed: false,
    priority: "Low",
  },
];

const todoListReducer = (state = initState, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];

    case "todoList/toggleTodoStatus":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    default:
      return state;
  }
};

export default todoListReducer;
