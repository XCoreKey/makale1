import React, { useContext } from "react";

import ThemeContext from "../context/ThemeContext"

function Button() {

const {theme, setTheme} = useContext(ThemeContext);


    return (
        <div>
        <button className="gradient-button gradient-button-1" onClick={() => setTheme(theme === 'light' ? "dark": "light")}>{theme}</button>
        </div>
    )
}

export default Button;