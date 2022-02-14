import React, {useState} from "react";
import '../App.css'
export default function Toggle () {

    const [isOn, setIsOn] = useState(false);
    const ClickToggle = () => {
        setIsOn(!isOn)
    };

    return (
        <>
        <header>Toggle</header>
            <div onClick={ClickToggle}>
                <div className={`Toggle-container ${isOn ? 'Toggle-checked' : ''}`}>
                    <div className={`Toggle-circle ${isOn ? 'Circle-checked' : ''}`}></div>
                </div>
            </div>
            <div>{isOn ? 'Switch On' : 'Switch Off'}</div>
        </>
    );
}