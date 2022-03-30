import React, { useState, useEffect } from 'react';

export const TimeInfo = (props) => {

    const [currentTime, setCurrentTime] = useState();
    const [timer, setTimer] = useState(undefined);

    useEffect(() => {

        if (timer == undefined && props.playing) {
             // playing -> set the timer
            const stateTimer = setInterval(() => {
                const time = Math.floor(props.audioRef.currentTime)
                setCurrentTime(time);
                console.log(time);
                console.log("playing " + props.playing)
            }, 1000);

            setTimer(stateTimer);
        }

        if (timer && !props.playing) {
            //not playing, stop the timer
            clearInterval(timer);
            setTimer(undefined);

        }


    }, [props.playing])


    return (
        <>
            <div className='from'>{(currentTime)}</div>
            {/* <div className='to'>{currentTime}</div> */}
        </>
    )
}
