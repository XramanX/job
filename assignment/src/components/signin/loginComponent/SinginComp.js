import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedUser, setUsers } from "../../../actions/accountAction";

const LoginComp = () => {
  const [users, setUsersList] = useState([]);

  const history = useNavigate();
  const dispatch = useDispatch();

  const handleUserSelect = (user) => {
    dispatch(setSelectedUser(user));
  };

  const handleAccountSelection = (accountId) => {
    history(`/dashboard/${accountId}`);
  };
  // fetching users from api
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      // api request to fetch users
      const response = await fetch("https://panorbit.in/api/users.json");

      if (response.ok) {
        const data = await response.json();
        setUsersList(data.users);
        dispatch(setUsers(data.users));
      } else {
        console.error("Failed to fetch users");
      }
    } catch (error) {
      // handler for network or other errors
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-heading">
        <span>Select an Account</span>
      </div>
      <ul className="login-list">
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => {
              handleAccountSelection(user.id);
              handleUserSelect(user);
            }}
          >
            <div className="profile-image">
              <img src={user.profilepicture} alt="Profile" />
            </div>
            <div>{user.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LoginComp;
