import React, {useState, useEffect, useRef} from "react";
import '../App.css';

export const TextInput = ({ value, valueHandle }) => {
    const inputElement = useRef(null);
    const [ editState, setEditState ] = useState(false);
    const [ result, setResult ] = useState(value);

    useEffect(() => {
        if (editState) {
            inputElement.current.focus();
        }
    }, [editState]);

    useEffect (() => {
        setResult(value);
    }, [value]);

    const clickHandle = () => {
        setEditState(true);
    };

    const changeResult = () => {
        setEditState(false);
        valueHandle(result);
    };

    const inputHandle = (e) => {
        setResult(e.target.value);
    }

    return (
        <>
            <div className="Click-input-box">
                {editState ? (
                    <input className="Text-edit" type="text" value={ result } ref={ inputElement }
                    onBlur={ changeResult } onChange={ inputHandle }></input>
                ) : (
                    <span onClick={ clickHandle }>{ result }</span>
                )}
            </div>
        </>
    );
}

export default function ClickToEdit () {

    const initValue = {
        name: '김코딩',
        age: 20
    };

    const [name, setName] = useState(initValue.name);
    const [age, setAge] = useState(initValue.age);

    return (
        <>
            <header style={{margin: 0}}>ClickToEdit</header>
            <div className="Click-input-container">
                <div className="Click-result">
                    <label>이름 </label>
                    <TextInput value={ name } valueHandle={(result) => setName(result)} />
                </div>
                <div className="Click-result">
                    <label>나이 </label>
                    <TextInput value={ age } valueHandle={(result) => setAge(result)} />
                </div>
                <div className="Click-result">
                    <div>이름 : { name } 나이 : { age }</div>
                </div>
            </div>
        </>
    );
}