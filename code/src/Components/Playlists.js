import React from "react";


export const Playlists = (props) => {

    return(

        <>
            <div class="leftside-image-container">
                <a href={props.playlistURL}>
                    <img className="pick-image" alt="Our choice" src={props.image} />
                </a>
            </div>
        </>
    );
};