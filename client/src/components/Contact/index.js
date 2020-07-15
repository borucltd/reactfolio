import React, { useRef, useState } from "react";
import Thanks from "../Thanks";
import API from "../../utils/API";


function Contact() {

    // controlled components
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [sendButtonState, setsendButtonState] = useState("disabled bg-secondary");
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    const [displayModal, setShowModal] = useState({display: 0})


  function onSubmit(event) { 
    event.preventDefault(); 
    console.log("Sending EMAIL")
    API.sendEmail(email,subject, message)
    .then(res => {
      setShowModal({ ...displayModal, display: 1})
    }) 
    .catch(err => console.log(err))
  }


  function onChangeEmail(event) {
    event.preventDefault(); 
    setEmail(event.target.value);
    if (reg.test(event.target.value) == false) 
    {
      setsendButtonState("disabled bg-secondary")
    } else {
      setsendButtonState("active bg-info")
    }
  }

  function onChangeSubject(event) {
    event.preventDefault(); 
    setSubject(event.target.value);
  }

  function onChangeMessage(event) {
    event.preventDefault(); 
    setMessage(event.target.value);
  }

  function handleCloseModal(event) {
    event.preventDefault();
    setShowModal({ ...displayModal, display: 0})
  }

  return (
    <main className="container mt-3 sticky-footer">
    
    <section className="row">
      <section className="col-lg-3 col-md-3 col-sm-3">
      </section>

      <section className="col-lg-6 col-md-6 col-sm-6">

        <h1 className="marker-font">Contact</h1><br/>

        <form onSubmit={onSubmit}>

          <section className="form-group">
            <label htmlFor="email" className="marker-font"> Email address</label>
            <input type="email" value={email} onChange={onChangeEmail} className="form-control kalam-font" aria-describedby="emailHelp" placeholder="Your email address" required/>
          </section>

          <section className="form-group">
            <label htmlFor="title" className="marker-font"> Subject</label>
            <textarea type="text" value={subject} onChange={onChangeSubject} className="form-control kalam-font" rows="1" id="title" maxLength="16" placeholder="Subject" required></textarea>
          </section>


          <section className="form-group">
            <div className="form-group">
              <label htmlFor="message" className="marker-font"> Message</label>
              <textarea type="text" value={message} onChange={onChangeMessage} className="form-control kalam-font" rows="5" id="message" maxLength="256"  placeholder="Type your message here" required></textarea>
            </div>
          </section>

          <section>
            <button type="submit" className={sendButtonState + " nav-link custom-text-color marker-font border dark"} >SEND</button>
          </section>
        </form>
      </section>
    </section>
    <Thanks show={displayModal.display} handleClose={handleCloseModal} key="12" nonce="saa" label="saa" src="sasa"/> 
  </main>

  )
}

export default Contact;
