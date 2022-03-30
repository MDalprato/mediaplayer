import React, { useState, useEffect } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

export const TimeInfo = (props) => {

    const [currentTime, setCurrentTime] = useState(0);
    const [remainingTime, setRemainingTime] = useState(0);

    const [timer, setTimer] = useState(undefined);
    const [seek, setSeek] = useState(0);

    useEffect(() => {

        if (timer == undefined && props.playing) {
            // playing -> set the timer
            const stateTimer = setInterval(() => {

                const currentTime = props.audioRef.currentTime;
                const duration = props.audioRef.duration;
                const remain = duration - currentTime;
                setCurrentTime(Number(currentTime / 60).toFixed(2));
                setRemainingTime(Number(remain / 60).toFixed(2));

               const perc = Math.floor(currentTime / 100 * duration);

               setSeek(perc)

            }, 10);

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
            <ProgressBar
                completed={seek}
                maxCompleted={100}
                height={5}
                className="wrapper"
                barContainerClassName="container"
                //completedClassName="barCompleted"
                labelClassName="label"
            />
            <div className='from'>{currentTime}</div>
            <div className='to'>{remainingTime}</div>
        </>
    )
}
