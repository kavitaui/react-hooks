import React, { useRef, useState } from 'react';
import './index.css';



const RefComponent = () => {
    const inputText = useRef(null);
    const [inputValue, setInputValue] = useState(null);
    function handleClick() {
        setInputValue(inputText.current.value)

    }

    return (
        <>
            <div id="player">
                <h2>Welcome {inputValue ?? ' Unknown Entity'}</h2>
                <input type="text" ref={inputText} />
                <button onClick={handleClick}>Set Name</button>
            </div>
        </>
    )
}

export default RefComponent;