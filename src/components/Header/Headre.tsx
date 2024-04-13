import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header() {
  const [mode, setMode] = useState(false);

  const handleMode = () => {
    setMode(!mode);
    if (!mode) {
      document.body.classList.add("dark-mode-body");
    } else {
      document.body.classList.remove("dark-mode-body");
    }
  };

  return (
    <header className={mode ? "dark-mode" : "light-mode"}>
      <p>Where in the world?</p>
      <div>
        <FontAwesomeIcon icon={faMoon} />
        <span onClick={handleMode}>Dark Mode</span>
      </div>
    </header>
  );
}
