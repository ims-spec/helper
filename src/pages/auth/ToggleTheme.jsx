import React, { useState, useEffect } from "react";

const lightIcon = <i className="bi bi-brightness-high-fill"></i>;
const darkIcon = <i className="bi bi-moon-stars-fill"></i>;

function ToggleTheme() {
  const [theme, setTheme] = useState("light");
  const [icon, setIcon] = useState(lightIcon);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    
    if (theme === "light") setIcon(lightIcon);
    if (theme === "dark") setIcon(darkIcon);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <div className="container text-center mt-5">
      <button onClick={toggleTheme} className="btn btn-primary">
        {icon}
      </button>
    </div>
  );
}

export default ToggleTheme;
