import React, { useState } from "react";
import "../App.css";

export default function Tag () {

    const stateTag = ['Wanted'];
    const [ tags, setTags ] = useState(stateTag);

    const addTags = (e) => {
        let items = e.target.items.trim();

        if(e.key === 'Enter' && !tags.includes(items) && items){
            setTags([...tags, items]);
            e.target.items = "";
        }
        else if(e.key === 'Enter' && !items){
            e.target.items = "";
        }
    }

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
                <input className="input" type="text" onKeyUp={(e) => {addTags(e)}} placeholder="Press enter to add tags"></input>
            </div>
        </>
    );
}