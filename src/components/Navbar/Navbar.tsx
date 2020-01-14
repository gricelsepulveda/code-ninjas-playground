import React from "react"

import "./navbar.scss"

const Navbar = (props: any) => {
  return (
    <div className={`hc-navbar ${props.theme}`}>
      <h1>I used to hate code</h1>
    </div>
  )
}

Navbar.defaultProps = {
    name:""
}

export default Navbar