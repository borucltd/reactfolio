import React, { useState } from "react";
import PModal from "../PModal";


function PortfolioSection(props) {

    const [displayModal, setShowModal] = useState({display: 0})

    console.log(props)
    function handleDisplayPModal(event) {
        event.preventDefault();
        const srcArray = event.target.src.split("/");
           
        setShowModal({ ...displayModal, display: props.kid + 1})
    }

    function handleClosePModal(event) {
        event.preventDefault();
        setShowModal({ ...displayModal, display: 0})
    }
   
    return (
        <section className="col-lg-4 col-md-6 col-sm-6 text-center ">
            <figure className="figure ">
                <a href={props.id} className="modalnr" nonce={props.nonce} onClick={handleDisplayPModal}>
                    <div className="circle-container">
                        <img src={props.src} className="photo circle" alt="photo"/>
                    </div>
                        <figcaption className="figure-caption custom-pic-text custom-pic-background">{props.label}</figcaption>
                </a>
            </figure>
            <PModal show={displayModal.display} handleClose={handleClosePModal} key={props.id} nonce={props.nonce} label={props.label} src={props.src} /> 
        </section>
        
    )
}

export default PortfolioSection;
