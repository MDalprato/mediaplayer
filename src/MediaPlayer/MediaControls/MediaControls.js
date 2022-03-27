import React, { useState } from 'react';
import './mediacontrols.css';
import { GrPlay as Play } from 'react-icons/gr';
import { GrStop as Stop } from 'react-icons/gr';
import { GrNext as Next } from 'react-icons/gr';

import RangeSlider from 'react-bootstrap-range-slider';
import ProgressBar from "@ramonak/react-progress-bar";

export default function MediaControls() {

    const [seek, setSeek] = useState(0);
    const [volume, setVolume] = useState(0);

    return (


        <div className='media-controls'>
            <div className='seek-bar'>

                <ProgressBar
                    completed={80}
                    className="wrapper"
                    barContainerClassName="container"
                    completedClassName="barCompleted"
                    labelClassName="label"
                />
                <div className='from'>00:00</div>
                <div className='to'>03:00</div>

            </div>
            <div className='buttons'>
                <Play className='play' size={40} />
                {/* <Stop size={40} /> */}
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
                        onChange={changeEvent => setVolume(changeEvent.target.value)}
                    />
                </div>
            </div>
        </div>

    )
}
