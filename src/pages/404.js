import React from "react"
import Layout from "../components/Layout"

const error = () => {
  return (
    <Layout>
      <div className="error-page">
        <section>
          <h1>404</h1>
          <h3>page not found</h3>
        </section>
      </div>
    </Layout>
  )
}
export default error
