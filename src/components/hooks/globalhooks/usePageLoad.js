import { useEffect } from "react";
import { rotateThemeDaily } from "./useRotateThemeDaily";

const setPageTheme = () => {
  rotateThemeDaily();
};

const generateAccountNumber = () => {
  const dataNumber = window.localStorage.getItem("dataNumber");
  if (!dataNumber) {
    const newAccountNumber = Math.floor(100000 + Math.random() * 900000);
    window.localStorage.setItem("dataNumber", newAccountNumber);
  }
};

const onPageLoad = () => {
  setPageTheme();
  generateAccountNumber();
};

const usePageLoad = () => {
  useEffect(() => {
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);
};

export default usePageLoad;
