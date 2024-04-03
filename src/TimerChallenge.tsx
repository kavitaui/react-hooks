import React, { useState, useRef } from 'react'

const TimerChallenge = ({ title, targetTime }) => {
    const [timeExpired, setTimeExpired] = useState(false);
    const [timeStart, setTimeStart] = useState(false);
    const timer = useRef();
    function handleStart() {
        timer.current = setTimeout(() => {
            setTimeExpired(true);

        }, targetTime * 1000)
        setTimeStart(true);
    }

    function handleStop() {
        clearTimeout(timer.current);
    }

    return (
        <div><section className="challenge">
            <h2>{title}</h2>
            {timeExpired && <p>You Lost!</p>}
            <p className="challenge-time">
                {targetTime} second {targetTime > 1 ? 's' : ''}

            </p>
            <p>
                <button onClick={timeStart ? handleStop : handleStart}>{timeStart ? 'Stop' : 'start'} Challenge</button>
            </p>
            <p>
                {timeStart ? 'Time is running....' : 'Timer inactive'}
            </p>
        </section>

        </div>
    )
}

export default TimerChallenge;