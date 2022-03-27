import React from 'react';
import cover from './cover.png'

import './style/MediaPlayer.css'

export default function MediaPlayer() {
    return (
        <div className='media-player'>
           <div className='album-cover'>
               <img src={cover}></img>
           </div>
           <div className='media-info'>
               info
           </div>
           <div className='media-controls'>
               controls
           </div>
        </div>
    )
}
