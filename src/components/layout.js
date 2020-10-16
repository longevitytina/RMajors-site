import React from "react"
import PropTypes from "prop-types"
import layoutStyles from "./layout.module.css"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main className={layoutStyles.body}>{children}</main>
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
