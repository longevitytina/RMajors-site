import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main style={{ backgroundColor: `rgb(55, 52, 51)` }}>{children}</main>
        {/* <footer style={{}}>
          © {new Date().getFullYear()}
          {` `}
          <a href="https://github.com/longevitytina">❤️ Tina</a>
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
