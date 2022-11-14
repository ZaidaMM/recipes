import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const about = ({ children }) => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
              amet tellus in leo eleifend imperdiet.
            </p>
            <p>
              Vestibulum pellentesque leo quam, in commodo lectus bibendum eget.
              Suspendisse mattis lectus nec elit venenatis hendrerit.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person puring salt in bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  )
}
export default about
