import React, {useContext} from "react";
import {ThemeContext} from "./ThemeContext";

function Page() {
  const theme = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === "dark" ? "#333" : "#eee",
    color: theme === "dark" ? "white" : "black",
    padding: 30,
    borderRadius: 12,
    textAlign: "center",
  };

  return (
    <div style={style}>
      <h2>현재 테마: {theme}</h2>
      <p>이 영역은 테마에 따라 스타일이 바뀝니다!</p>
    </div>
  );
}

export default Page;