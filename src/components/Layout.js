import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

import "normalize.css"
import "../assets/css/main.css"

const Layout = ({ children }) => {
  // console.log(props)
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
export default Layout
