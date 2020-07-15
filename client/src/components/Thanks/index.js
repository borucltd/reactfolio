import React from "react";
import "./style.css"


function Thanks(props) {
    
    const show = props.show ? "modal display-block" : "modal display-none";
   
    return (
        <div className={show} >
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='container2'>
                        <a href={props.id} className='closebtn' onClick={props.handleClose} >✖</a>
                        <p className="text-dark"> Thank you for your message !</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Thanks;
