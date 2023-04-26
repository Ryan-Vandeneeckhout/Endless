export const rotateThemeDaily = () => {
  const htmlElement = document.documentElement;
  const dataTheme = window.localStorage.getItem("dataTheme");

  if (!dataTheme) {
    const dayOfWeek = new Date().getDay();
    let theme;

    switch (dayOfWeek) {
      case 0:
      case 1:
      case 6:
        theme = "red";
        break;

      case 2:
        theme = "green";
        break;

      case 3:
        theme = "blue";
        break;

      case 4:
        theme = "darkmode";
        break;

      case 5:
        theme = "violet";
        break;

      default:
        break;
    }

    htmlElement.setAttribute("data-theme", theme);
  } else {
    htmlElement.setAttribute("data-theme", dataTheme);
  }
};
