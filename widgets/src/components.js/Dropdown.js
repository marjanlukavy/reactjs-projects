import React, { useEffect, useState } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div key={option.value} onClick={() => onSelectedChange(option)}>
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <label>Select a Color</label>
      <div>
        <div>{selected.label}</div>
        <div onClick={() => setOpen(!open)}>
          <div>{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
