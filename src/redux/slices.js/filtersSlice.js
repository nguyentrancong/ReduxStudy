import { createSlice } from "@reduxjs/toolkit";

const initState = {
  search: "",
  status: "All",
  priorities: [],
};

// const filtersReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filters/searchFilterChange":
//       return {
//         ...state,
//         search: action.payload,
//       };

//     case "filters/statusFilterChange":
//       return {
//         ...state,
//         status: action.payload,
//       };

//     case "filters/prioritiesFilterChange":
//       return {
//         ...state,
//         priorities: [...action.payload],
//       };

//     default:
//       return state;
//   }
// };

// export default filtersReducer;

// redux toolkit
export default createSlice({
  name: "filters",
  initialState: initState,
  reducers: {
    searchFilterChange: (state, action) => {
      // mutation || IMMER
      state.search = action.payload;
    }, //=> {type: 'filters/searchFilterChange'}

    statusFilterChange: (state, action) => {
      state.status = action.payload;
    }, //=> {type: 'filters/statusFilterChange'}

    prioritiesFilterChange: (state, action) => {
      state.priorities = action.payload;
    }, //=> {type: 'filters/prioritiesFilterChange'}
  },
});
