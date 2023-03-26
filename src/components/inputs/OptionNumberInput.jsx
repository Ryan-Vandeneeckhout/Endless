import { useRef } from "react";

export const OptionNumberInput = (props) => {
  const SelectCurrentRef = useRef(null);

  const changeProductCount = () => {
    props.productCount(SelectCurrentRef.current.value);
    console.log(SelectCurrentRef.current.value);
  };
  return (
    <select ref={SelectCurrentRef} onInput={changeProductCount}>
      {Array.from({ length: `${props.inputSelectionLength}` }, (_, index) => (
        <option
          aria-label={`${index + 1} product`}
          value={index + 1}
          key={index}
        >
          {index + 1}
        </option>
      ))}
    </select>
  );
};
