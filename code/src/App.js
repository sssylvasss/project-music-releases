import React from 'react';
import data from './data.json';
import { Header } from './Components/Header.js';
import { Album } from './Components/Album.js';

const albumArray = data.albums.items

export const App = () => {
  return (
    <div>
      <Header />
      <Album />
      <div> 
        {albumArray.map(album => (
          <Album
          key={album.artists[0].id}
              albumName={ album.name }
              artistName={ album.artists[0].name }
              image={ album.images[0].url }
              albumURL={ album.external_urls.spotify }
              artistURL={ album.artists[0].external_urls.spotify }
              artists={ album.artists }
          />
        ))}
      </div>
    </div>
  );
};
