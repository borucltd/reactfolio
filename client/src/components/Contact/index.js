import React from "react";


function handleSend() {

console.log("dsaddsdd")


}

function Contact() {
  return (
    <main className="container mt-3 sticky-footer">
    
    <section className="row">
      <section className="col-lg-3 col-md-3 col-sm-3">
      </section>

      <section className="col-lg-6 col-md-6 col-sm-6">

        <h1 className="marker-font">Contact</h1><br/>

        <form>

          <section className="form-group">
            <label htmlFor="email" className="marker-font"> Email address</label>
            <input type="email" className="form-control kalam-font" id="email" aria-describedby="emailHelp" placeholder="Your email address" required/>
          </section>

          <section className="form-group">
            <label htmlFor="title" className="marker-font"> Subject</label>
            <textarea className="form-control kalam-font" rows="1" id="title" maxLength="16" placeholder="Subject" required></textarea>
          </section>


          <section className="form-group">
            <div className="form-group">
              <label htmlFor="message" className="marker-font"> Message</label>
              <textarea className="form-control kalam-font" rows="5" id="message" maxLength="256"  placeholder="Type your message here" required></textarea>
            </div>
          </section>

          <section>
            <a className="nav-link active custom-text-color marker-font border" href="./home.html" onClick={handleSend}>SEND</a>
          </section>

        </form>


      </section>
    </section>
  </main>

  )
}

export default Contact;
