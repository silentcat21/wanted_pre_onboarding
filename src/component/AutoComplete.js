import React, { useState, useEffect} from "react";
import '../App.css'

export default function AutoComplete () {

    const selectArray = [
        'apple','banana','cat','demo','ease','foot','google','hello','image','jQuery','keel','like'
        ,'monster','name','optimus','path','queen','respone','silentcat','telephone','useState','victim'
        ,'Wanted','xelos','z-index','사과'
    ];

    const [saveText, setSaveText] = useState(false);

    const [inputText, setInputText] = useState('');

    const [search, setSearch] = useState(selectArray);

    const [select, setSelect] = useState(-1);

    useEffect(() => {
        if (inputText === '') {
            setSaveText(false);
            setSearch([]);
        }
        if(inputText !== '') {
            setSearch(selectArray.filter((e) => {
                return e.includes(inputText)
            })
        )
        }
    }, [inputText]);

    const changeHandler = (e) => {
        setInputText(e.target.value);
        setSaveText(true)
    };

    const autoClickHandler = (clickedSearch) => {
        setInputText(clickedSearch)
    };

    const deleteInput = (e) => {
        setInputText("")
    }
    
    const arrowKey = (e) => {
        if(saveText){
            if(e.key == 'ArrowDown' && search.length -1 > select) {
                setSelect(select +1)
            }
            else if (e.key === 'ArrowUp' && select >= 0) {
                setSelect(select -1)
            }
            else if (e.key === 'Enter' && select >= 0) {
                autoClickHandler(search[select])
                setSelect(-1);
            }
        }
    }

    return (
        <>
            <header>AutoComplete</header>
            <div className='Autocomplete-container'>
                <input type="text" value={ inputText } onChange={ changeHandler }
                 onKeyUp={ arrowKey }>     
                 </input>
                 <div className='Autocomplete-delete' onClick={ deleteInput }>
                     &times;
                 </div>
            </div>
            <ul className='Autocomplete-downContainer'>
                {search.map((option, index) => {
                    return <li key={ index } onClick={() => autoClickHandler(option)}
                    className={select === index ? 'select' : '' }
                    >{ option }</li>
                })}
            </ul>
        </>
    );
}