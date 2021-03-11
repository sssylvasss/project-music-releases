import React from 'react';

export const Album = (props) => {
    return (
        <>
            <div className="album-container">
                <div className="image-container">
                    <img className="albumcover" src={props.image} alt="Album cover" />
                    <div className="icon-container hidden">
                        <img className="heart-icon" src="/icons/heart.svg" />
                        <img className="play-icon" src="/icons/play.svg" />
                        <img className="dots-icon" src="/icons/dots.svg" />
                    </div>
                </div>
                <div className="text-container">
                    <a href={props.albumURL}>
                        <h2 className="album-name">{props.albumName}</h2>
                    </a>
                    <a href={props.artistURL}>
                        <p className="artist-name">{props.artistName}</p>
                    </a>
                </div>
            </div>
        </>
    );
};