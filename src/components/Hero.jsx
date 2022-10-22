import React from "react"

function Hero(props) {

  return (
    <div className={props.isDark ? "hero dark--hero" : "hero"}>
      <h1 className="hero--heading">Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
}

export default Hero