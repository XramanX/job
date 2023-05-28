import React from "react";
import RightArrow from "../../../assets/icons/rightArrow.svg";
function NavbarComponent({ onSelect, selectedItem }) {
  const navElement = ["Profile", "Posts", "Gallery", "ToDo"];
  const lastElement = navElement.length - 1;
  return (
    <div className="left-nav-bar">
      <ul>
        {navElement.map((element, index) => (
          <li
            className={`item ${index === lastElement ? "" : "li-underline"} ${
              selectedItem === element ? "selected circle" : ""
            } `}
            key={index}
            onClick={() => onSelect(`${element}`)}
          >
            <span>{element}</span>
            {selectedItem === element ? (
              <img className="right-arrow" src={RightArrow} alt="rightarrow" />
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavbarComponent;
