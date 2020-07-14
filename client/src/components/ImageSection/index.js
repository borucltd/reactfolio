import React, { useState } from "react";
import Modal from "../Modal";


function ImageSection(props) {

    const [displayModal, setShowModal] = useState({display: 0})

    function handleDisplayModal(event) {
        event.preventDefault();
        const srcArray = event.target.src.split("/");
        const numericalId = event.target.src.split("/")[srcArray.length -1].replace(/\D/g,'')      
        setShowModal({ ...displayModal, display: numericalId})
    }

    function handleCloseModal(event) {
        event.preventDefault();
        setShowModal({ ...displayModal, display: 0})
    }
   
    return (
        <section className="col-lg-4 col-md-6 col-sm-6 text-center ">
            <figure className="figure ">
                <a href={props.id} className="modalnr" nonce={props.nonce} onClick={handleDisplayModal}>
                    <div className="circle-container">
                        <img src={props.src} className="photo circle" alt="photo"/>
                    </div>
                        <figcaption className="figure-caption custom-pic-text custom-pic-background">{props.label}</figcaption>
                </a>
            </figure>
            <Modal show={displayModal.display} handleClose={handleCloseModal} key={props.id} nonce={props.nonce} label={props.label} src={props.src} /> 
        </section>
        
    )
}

export default ImageSection;
