
import React, { useState } from "react"


const Player = ({ title }, { targetTime }) => {
    const [inputtext, setInputtext] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function HandleChange(Event) {
        setSubmitted(false);
        setInputtext(Event.target.value)
    }


    function HandleClick() {
        setSubmitted(true)

    }
    const filePicker = React.useRef();
    function handleSatrtPicImage() {
        filePicker.current.click();
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
                    <p className='box-2'>
                        Please select an image
                    </p>
                    <p>
                        <input data-testid="file-picker" type="file" accept="image/*" ref={filePicker} />



                        <button className='btn' onClick={handleSatrtPicImage}>Pick Image</button>
                    </p>
                </div>
            </div>

        </>
    )
}

export default Player