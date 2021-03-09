import React from 'react';

export const Album = (props) => {
    return (
        <>
            <div className="album-container">
                <div className="image-container">
                        <img className="albumcover" src={props.image} alt="Album cover" />
                    <div className="icon-container">
                        <img className="heart-icon" src="code/public/icons/heart.svg" />
                        <img className="play-icon" src="code/public/icons/play.svg" />
                        <img className="dots-icon" src="code/public/icons/dots.svg" />
                    </div>
                </div>
                <div className="text-container">
                    <h2 className="album-name">{props.albumName}</h2>
                    <p className="artist-name">{props.artistName}</p>
                </div>
            </div>
        </>
    );
};