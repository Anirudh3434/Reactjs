import "../App.css";
import { usetheme } from '../Context/Theme';
import "react-toggle/style.css"

export default function Toggle() {
  const { ThemeMode, darkTheme, lightTheme, boxDark, boxLight } = usetheme();

  function changed(e) {
    const status = e.currentTarget.checked;
    if (status) {
      darkTheme();
      boxDark();
    } else {
      lightTheme();
      boxLight();
    }
  }

  return (
    <>
      <input
        type="checkbox"
        onChange={changed}
        checked={ThemeMode === 'dark'}
      />
    </>
  );
}
