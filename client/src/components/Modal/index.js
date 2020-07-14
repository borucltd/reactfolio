import React from "react";
import "./style.css"


function Modal(props) {
    
    const show = props.show ? "modal display-block" : "modal display-none";
   
    return (
        <div className={show} >
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='container2'>
                        <a href={props.id} className="prolink" target="_blank">{props.label}</a>
                        <a className="prolink">{props.id}</a>
                        <a href={props.id} className='closebtn' onClick={props.handleClose} >✖</a>
                    </div>
                    <img src={props.src} width='100%' height='auto'/>
                </div>
            </div>
        </div>
    )
}

export default Modal;
