import { useRef } from "react";

export const OptionNumberInput = ({ productCount, inputSelectionLength }) => {
  const selectRef = useRef(null);

  const handleProductCountChange = () => {
    const value = selectRef.current.value;
    productCount(value);
  };

  const options = Array.from({ length: inputSelectionLength }, (_, index) => (
    <option key={index} value={index + 1} aria-label={`${index + 1} product`}>
      {index + 1}
    </option>
  ));

  return (
    <select ref={selectRef} onChange={handleProductCountChange}>
      {options}
    </select>
  );
};
