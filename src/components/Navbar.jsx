import React from "react"

function Navbar(props) {

  return (
    <nav className={props.isDark ? "nav dark--nav" : "nav"}>
      <img src="/images/react-icon-small.png" className="nav--logo" />
      <h2 className="nav--name">React Facts</h2>
      <h4 className="nav--light">Light</h4>
      <label className="switch">
        <input type="checkbox" onChange={props.toggleDarkMode} />
        <span className="slider round"></span>
      </label>
      <h4 className="nav--dark">Dark</h4>
    </nav>
  )
}

export default Navbar