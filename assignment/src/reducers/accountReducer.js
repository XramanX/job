import { SET_SELECTED_USER, SET_USERS } from "../actions/accountAction";

const initialState_SelectedUser = {
  selectedUser: null,
};
const initialState_SetUsers = {
  users: [],
};

export const accountReducer = (state = initialState_SelectedUser, action) => {
  switch (action.type) {
    case SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload,
      };
    default:
      return state;
  }
};

export const userReducer = (state = initialState_SetUsers, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
