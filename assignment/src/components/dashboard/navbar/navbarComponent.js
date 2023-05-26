import React, { useEffect } from "react";

function NavbarComponent({ onSelect, selectedItem }) {
  const navElement = ["Profile", "Posts", "Gallery", "ToDo"];
  const lastElement = navElement.length - 1;
  return (
    <div className="left-nav-bar">
      <ul>
        {navElement.map((element, index) => (
          <li
            className={`item ${index === lastElement ? "" : "li-underline"} ${
              selectedItem === element ? "selected" : ""
            } `}
            key={index}
            onClick={() => onSelect(`${element}`)}
          >
            <span>{element}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavbarComponent;
