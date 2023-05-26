import React from "react";
import NavbarComponent from "./navbar/navbarComponent";
import RightContent from "./RightContent/RightContent";
import { useState } from "react";
function Dashboard() {
  const [selectedItem, setSelectedItem] = useState("Profile");

  const handleSelect = (item) => {
    setSelectedItem(item);
  };
  return (
    <div className="dashboard">
      <NavbarComponent onSelect={handleSelect} selectedItem={selectedItem} />
      <RightContent selected={selectedItem} />
    </div>
  );
}

export default Dashboard;
