import React, { useState } from 'react'

const Model = () => {
    const [isOpen, setIsopen] = useState(false);
    const handleOpen = () => {
        setIsopen(true);
    }
    const handleClose = () => {
        setIsopen(false);
    }

    return (
        <>
            <button onClick={handleOpen}>Open Dialog</button>
            {
                isOpen && (
                    <dialog open>
                        <h2>Dialog Title</h2>
                        <form>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" />
                            <br />
                            <button type="submit">Submit</button>
                        </form>
                        <button onClick={handleClose}>Close</button>


                    </dialog>

                )
            }
        </>
    )
}

export default Model