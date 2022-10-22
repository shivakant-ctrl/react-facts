import React from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

function App() {

  const [isDark, setIsDark] = React.useState(false)

  function toggleDarkMode() {
    setIsDark(prevIsDark => !prevIsDark)
  }
  
  return (
    <div className="app">
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <Hero isDark={isDark} />
    </div>
  )
}

export default App