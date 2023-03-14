import { useState } from "react";

export const useSlideLeftSlideRight = (MakeupMap) => {
  const [arrayList, setArray] = useState(MakeupMap);

  const nextSlide = () => {
    let arrayEnd = arrayList.shift();
    setArray((curr) => [...curr, arrayEnd]);
  };

  const preSlide = () => {
    let arrayEnd = arrayList.pop();
    setArray((array) => [arrayEnd, ...array]);
  };
  return { nextSlide, preSlide, arrayList };
};
