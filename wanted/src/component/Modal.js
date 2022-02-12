import React, {useState} from "react";
import "../App.css"

export default function Modal () {

    const[isOpen, setIsOpen ] = useState(false);

    const ModalHandler = (event) => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <header>Modal</header>
            <div className="Modal-container">
                <div className="Modal-button" onClick={ModalHandler}>
                    {isOpen ? "Opened" : "Open"}
                </div>
                {isOpen ? <div className="Modal-background" onClick={ModalHandler}>
                            <div className="Modal-window" onClick={(e) => {e.stopPropagation()}}>
                                <div> Wanted Pre-Onboarding!</div>
                                <div className="Accept-button" onClick={ModalHandler}>Close</div>
                            </div>
                        </div> : null}
            </div>
        </>
    );
}