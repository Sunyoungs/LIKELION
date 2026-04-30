import React, {useState} from "react";
import {ThemeContext} from "./ThemeContext";
import Page from "./Page";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ pading: 20 }}>
        <h1>Context API 실습</h1>
        <button onClick={toggleTheme}>테마 변경</button>
        <Page />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;