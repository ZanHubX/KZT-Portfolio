import React, { useState } from "react";
import NavBar from "./components/NavBar";

import { SunIcon, MoonIcon } from "@heroicons/react/16/solid";
import Hero from "./components/Hero";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`w-full p-2 ${isDarkMode ? "bg-slate-800" : "bg-white"}`}>
      <div className="flex justify-end ">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 bg-gray-300 rounded-full mr-2"
        >
          {isDarkMode ? (
            <SunIcon className="h-6 w-6 text-yellow-500" />
          ) : (
            <MoonIcon className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>
      {/* Pass isDarkMode prop */}
      <NavBar isDarkMode={isDarkMode} />
      <Hero />
    </div>
  );
}

export default App;
