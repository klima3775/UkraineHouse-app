import React, { useState } from "react";
import "./dropdown.scss";

function Dropdown({ options, defaultText }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    console.log("toggleDropdown called");
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    console.log("handleOptionSelect called with option:", option);
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        {selectedOption ? selectedOption : defaultText}
        {isOpen ? " ▲" : " ▼"}
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
