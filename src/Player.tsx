import React, { useState } from 'react'

const Player = () => {
    const [inputtext, setInputtext] = useState('');
    const [submitted, setSubmitted] = useState(false);
    function HandleChange(Event) {
        setSubmitted(false);
        setInputtext(Event.target.value)
    }
    function HandleClick() {
        setSubmitted(true)

    }

    return (
        <>
            <div id="player"> <h2>Welcome {submitted ? inputtext : 'Unknown Entity'}</h2>
                <p>
                    <input type="text" onChange={HandleChange} value={inputtext} />
                    <button onClick={HandleClick}> Set Name</button>
                </p>
            </div>
        </>
    )
}

export default Player