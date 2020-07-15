import React from "react";
import "./style.css"


function PModal(props) {
    
    const show = props.show ? "modal display-block" : "modal display-none";
   
    return (
        <div className={show} >
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='container2'>
                                               
                        <a href={props.name} className="prolink" target="_blank">{props.name}</a>
                        <span className='closebtn' onClick={props.handleClose}>✖</span>
                        
                    </div>
                    <img src={props.src} width='100%' height='auto'/>
                </div>
            </div>
        </div>
    )
}

export default PModal;
