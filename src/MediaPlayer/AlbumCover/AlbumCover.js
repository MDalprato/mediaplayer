import React, { useState } from 'react';
import cover from '../../cover.png';
import './albumcover.css';

export default function AlbumCover() {
    return (
        <div className='album-cover'>
            <div className='cover'>
                <img src={cover}></img>
            </div>
        </div>
    )
}
