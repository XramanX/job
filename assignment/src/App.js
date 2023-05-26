import "./App.css";
import NavbarComponent from "./components/NavBar/navbarComponent";
import React, { useState, useEffect } from "react";
import RightContent from "./components/RightContent/RightContent";

function App() {
  const [selectedItem, setSelectedItem] = useState("Profile");
  const handleSelect = (item) => {
    setSelectedItem(item);
  };
  return (
    <div className="app">
      <NavbarComponent onSelect={handleSelect} selectedItem={selectedItem} />
      <RightContent selected={selectedItem} />
    </div>
  );
}

export default App;
