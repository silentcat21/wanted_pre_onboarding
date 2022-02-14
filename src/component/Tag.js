import React, { useState } from "react";
import "../App.css";

export default function Tag () {

    const stateTag = ['Wanted'];
    const [ tags, setTags ] = useState(stateTag);

    const addTags = (e) => {
        let value = e.target.value.trim();

        if(e.key === "Enter" && !tags.includes(value) && value){
            setTags([...tags, value]);
            e.target.value = "";
            console.log('key1')
        }
        else if(e.key === "Enter" && !value){
            e.target.value = "";
            console.log('key2')
        }
    };

    const deleteTags = (indexToDelete) => {
        setTags(tags.filter((tag) => {
            return tag !== tags[indexToDelete]
        }))


    }

    return (
        <>
            <header>Tag</header>
            <div className="Tag-container">
                <ul id='tags'>
                    {tags.map((tag, index) => (
                        <li key={ index } className="tag">
                            <span>{ tag }</span>
                            <span className="tag-close" onClick={() => deleteTags(index)}>&times;</span>
                        </li>
                    ))}
                </ul>
                <input type="text" onKeyUp={(e) => {addTags(e)}} placeholder="Press enter to add tags"></input>
            </div>
        </>
    );
}