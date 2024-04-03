import React, { useRef } from 'react'

export const WorkOutApp = (props: any) => {
    const { title, description, time, onComplete } = props;
    const timer = useRef();
    function handleStart() {
        timer.current = setTimeout(handleStop, time)
    }
    function handleStop() {
        clearTimeout(timer.current);
        onComplete();
    }

    return (
        <>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{time}</p>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>

        </>
    )
}
export default WorkOutApp;
