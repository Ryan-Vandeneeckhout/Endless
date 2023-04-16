export const RotateThemeDaily = () => {
  let htmlElement = document.documentElement;

  if (
    window.localStorage.getItem("dataTheme") === null ||
    window.localStorage.getItem("dataTheme") === undefined
  ) {
    switch (new Date().getDay()) {
      case 0:
        htmlElement.setAttribute("data-theme", "red");
        break;

      case 1:
        htmlElement.setAttribute("data-theme", "red");
        break;

      case 2:
        htmlElement.setAttribute("data-theme", "green");
        break;

      case 3:
        htmlElement.setAttribute("data-theme", "blue");
        break;

      case 4:
        htmlElement.setAttribute("data-theme", "darkmode");
        break;

      case 5:
        htmlElement.setAttribute("data-theme", "violet");
        break;

      case 6:
        htmlElement.setAttribute("data-theme", "red");
        break;
      default:
    }
  }
};
