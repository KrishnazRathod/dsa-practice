import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const MultiSelectSearch = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionRemove = (removedValue) => {
    setSelectedOptions(
      selectedOptions.filter((option) => option.value !== removedValue)
    );
  };

  const customStyles = {
    valueContainer: (provided) => ({
      ...provided,
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      backgroundColor: "white",
    }),
    multiValue: (provided) => ({
      ...provided,
      margin: "2px",
      padding: "5px",
      borderRadius: "5px",
      backgroundColor: "black",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      marginRight: "5px",
      backgroundColor: "gray",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "red",
      cursor: "pointer",
      "&:hover": {
        color: "darkred",
      },
      backgroundColor: "yellow",
    }),
  };

  return (
    <Select
      isMulti
      options={options}
      value={selectedOptions}
      onChange={setSelectedOptions}
      styles={customStyles}
      removeSection={{
        alignItems: "center",
        display: "flex",
      }}
    />
  );
};

export default MultiSelectSearch;
