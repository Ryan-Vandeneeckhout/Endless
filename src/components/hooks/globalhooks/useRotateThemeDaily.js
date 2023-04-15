export const RotateThemeDaily = () => {
  var myDate = new Date();
  if (window.localStorage.getItem("dataTheme") === (null || undefined)) {
    if (myDate.getDay() == 6 || myDate.getDay() == 0) alert("Weekend!");
  } else {
    if (myDate.getDay() == 6 || myDate.getDay() == 0) alert("Weekend!");
    else {
      alert("Weekday!");
    }
  }
};
