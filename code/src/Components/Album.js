import React from 'react';
// import data from 'code/src/data.json';

export const Album = () => {
    const imageSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYsdNzi5PAtg3hlPVFlzQXPLIAW_5hcPrFmw&usqp=CAU";
    return (
        <>
            <div className="album-container">
                <img className="albumcover" src={imageSrc} alt="Album cover" />
                <div className="text-container">
                    <h2 className="album-name">hejhej</h2>
                    <p className="artist-name">hel</p>
                </div>
            </div>
        </>
    );
};