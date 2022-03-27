import React from 'react';
import AlbumCover from './AlbumCover/AlbumCover';
import MediaControls from './MediaControls/MediaControls';
import MediaInfo from './MediaInfo/MediaInfo';
import './style/MediaPlayer.css';

export default function MediaPlayer() {
    return (
        <div className='media-player'>
            <AlbumCover />
            <MediaInfo />
            <MediaControls />
        </div>
    )
}
