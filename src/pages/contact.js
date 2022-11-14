import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article>
            <h3>Want To Get In Touch?</h3>
            <p>
              Lorem ipsum dolor sit amet, ei pri mucius efficiantur. Veniam
              nostrum pertinacia vel ne, eos an zril conclusionemque. Nec magna
              expetenda ea. Laoreet offendit incorrupte vis ut.
            </p>
            <p>
              Clita dissentiunt no nam. Nusquam oportere cum et. Dicit
              honestatis.
            </p>
            <p>
              Id quem mollis eum, an has tritani platonem pericula. Utinam
              melius.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">your message</label>
                <textarea name="message" id="mesage" />
              </div>
              <button className="btn block">submit</button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
