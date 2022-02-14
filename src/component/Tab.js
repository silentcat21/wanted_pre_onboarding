import React, { useState } from "react";
import '../App.css';
import Toggle from "./Toggle"
import Modal from "./Modal"
import Tag from "./Tag"
import AutoComplete from "./AutoComplete"
import ClickToEdit from "./ClickToEdit"

export default function Tab() {

    const tabMenu = [
        { title: 'Toggle', content: <Toggle/>},
        { title: 'Modal', content: <Modal/>},
        { title: 'Tag', content: <Tag/>},
        { title: 'AutoComplete', content: <AutoComplete/>},
        { title: 'ClickToEdit', content: <ClickToEdit/>},
    ];

    const [ currentTab, setCurrentTab ] = useState(0)

    const clickHandler = (index) =>{
        setCurrentTab(index);
    };

    return(
        <div>
            <ul className="Tap">
                { tabMenu.map((tm, index) => {
                    return <li key={index} className={`${index === currentTab ? 'Tap-item Tap-focus' : 'Tap-item'}`}
                    onClick={() => clickHandler(index)}>
                    {tm.title}
                </li>
                })}
            </ul>
            <div className="Tap-container">
                {tabMenu[currentTab].content}
            </div>
        </div>
    );
}