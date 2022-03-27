
import React, { useState } from 'react';
import './mediainfo.css';
import { MdOutlineIosShare as Share } from 'react-icons/md';

export default function MediaInfo() {
    return (
        <div className='media-info'>
            <div className='info'>
                <div className='title'>Human</div>
                <div className='artist'>One Republic</div>
            </div>
            <div className='share'>
                <div className='share-title'>
                    <Share size={20} />
                    </div>
            </div>
        </div>
    )
}


