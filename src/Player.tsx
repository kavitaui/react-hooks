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
            <div className='dom-model'>
                dom-model
                <div className='box-1'>
                    box-1
                    <div className='box-2'>
                        Please select an image
                        <button>Pick Image</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Player