
import React, { useState } from 'react';
import './mediainfo.css';

export default function MediaInfo() {
    return (
        <div className='media-info'>
            <div className='info'>
                <div className='title'>Title</div>
                <div className='artist'>Artist</div>
            </div>
            <div className='share'>
                <div className='share-title'>Share</div>
            </div>
        </div>
    )
}


