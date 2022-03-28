import React, { useState, useEffect } from 'react';
import './mediacontrols.css';
import { GrPlay as Play } from 'react-icons/gr';
import { GrStop as Stop } from 'react-icons/gr';
import { GrNext as Next } from 'react-icons/gr';

import RangeSlider from 'react-bootstrap-range-slider';
import ProgressBar from "@ramonak/react-progress-bar";
import song from '../../song.mp3';

const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);
    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },
        [playing]
    );
    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);
    return [playing, toggle];
};


export default function MediaControls() {

    const [seek, setSeek] = useState(60);
    const [volume, setVolume] = useState(20);

    const [playing, toggle] = useAudio(song);

    return (


        <div className='media-controls'>
            <div className='seek-bar'>
                <ProgressBar
                    completed={seek}
                    maxCompleted={100}
                    height={5}
                    className="wrapper"
                    barContainerClassName="container"
                    //completedClassName="barCompleted"
                    labelClassName="label"
                />
                <div className='from'>00:00</div>
                <div className='to'>03:00</div>

            </div>
            <div className='buttons'>

                <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>


                <Play onClick={toggle} className='play' size={40} />
                <Next className='next' size={40} />
                <Next className='previous' size={40} />
            </div>
            <div className='volue-control'>
                <div className='volume-slider'>
                    <RangeSlider
                        size='sm'
                        tooltip={'off'}
                        value={volume}
                        variant='primary'
                        className='volume-seeker'
                        onChange={changeEvent => setVolume(changeEvent.target.value)}
                    />
                </div>
            </div>
        </div>

    )
}
