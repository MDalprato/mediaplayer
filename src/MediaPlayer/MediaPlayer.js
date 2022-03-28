import React, { useState } from 'react';
import AlbumCover from './AlbumCover/AlbumCover';
import MediaControls from './MediaControls/MediaControls';
import MediaInfo from './MediaInfo/MediaInfo';
import './mediaplayer.css';
import Blur from 'react-blur';
import cover from '../cover.png';

export default function MediaPlayer() {



    return (
        <Blur img={cover} blurRadius={60} enableStyles>
            <div className='media-player'>
                <AlbumCover />
                <MediaInfo />
                <MediaControls />
            </div>
        </Blur>

    )
}
