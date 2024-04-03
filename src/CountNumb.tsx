import React, { useState, useEffect, useRef } from 'react'

const CountNumb = () => {
    const count = useRef(0);
    const [inputnumb, setInputNumb] = useState('');
    const handleChange = (e) => {
        setInputNumb(e.target.value)
    }
    useEffect(() => {
        count.current = count.current + 1;
    });


    return (
        <div>
            <input
                type="text"
                value={inputnumb}
                onChange={handleChange} />

            <h2>Render Count:{count.current}</h2>
        </div>
    )
}

export default CountNumb