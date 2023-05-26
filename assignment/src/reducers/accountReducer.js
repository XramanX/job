const initialState = {
  selectedUser: null,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELECTED_USER":
      return {
        ...state,
        selectedUser: action.payload,
      };
    default:
      return state;
  }
};

export default accountReducer;
