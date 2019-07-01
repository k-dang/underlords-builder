import React from "react"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div
      style={{
        margin: `10px`,
      }}
    >
      {children}
    </div>
  )
}

export default Layout
