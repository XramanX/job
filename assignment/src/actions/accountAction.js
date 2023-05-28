export const SET_USERS = "SET_USERS";
export const SET_SELECTED_USER = "SET_SELECTED_USER";

export const setSelectedUser = (user) => {
  return function (dispatch, getState) {
    dispatch({ type: SET_SELECTED_USER, payload: user });
  };
};
export const setUsers = (users) => {
  return function (dispatch, getState) {
    dispatch({ type: SET_USERS, payload: users });
  };
};
