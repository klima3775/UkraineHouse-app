import React, { useState } from "react";
import "./dropdown.scss";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ["Option 1", "Option 2", "Option 3"];

  const toggleDropdown = () => {
    console.log("toggleDropdown called"); // добавлено
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    console.log("handleOptionSelect called with option:", option); // добавлено
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        {selectedOption ? selectedOption : "Select an option"}
      </button>
      {isOpen && (
        <div className={`dropdown-menu ${isOpen ? "active" : ""}`}>
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionSelect(option)}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
