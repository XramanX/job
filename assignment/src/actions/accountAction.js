export const setSelectedUser = (user) => {
  return function (dispatch, getState) {
    dispatch({ type: "SET_SELECTED_USER", payload: user });
  };
};
