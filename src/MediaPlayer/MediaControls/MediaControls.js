import React, { useState } from 'react';
import './mediacontrols.css';
import { BsPlayFill as Play } from 'react-icons/bs';
import { BsStopFill as Stop } from 'react-icons/bs';
import RangeSlider from 'react-bootstrap-range-slider';

export default function MediaControls() {

    const [seek, setSeek] = useState(0);
    const [volume, setVolume] = useState(0);

    return (
        
 
        <div className='media-controls'>
            <div className='seek-bar'>
                <RangeSlider
                    tooltip={'off'}
                    value={seek}
                    onChange={changeEvent => setSeek(changeEvent.target.value)}
                />
            </div>
            <div className='buttons'>
                <Play size={40} />
                <Stop size={40} />

            </div>
            <div className='volue-control'>
                <div className='volume-slider'>
                    <RangeSlider
                        tooltip={'off'}
                        value={volume}
                        onChange={changeEvent => setVolume(changeEvent.target.value)}
                    />
                </div>
            </div>
        </div>

    )
}
