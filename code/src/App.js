import React from 'react';
import data from './data.json';
import json from './stretch-goal.json';
import { Header } from './Components/Header.js';
import { Album } from './Components/Album.js';
import { Playlists } from './Components/Playlists.js';
import { Playlistheader } from './Components/Playlistheader';

const albumArray = data.albums.items;
const playlistArray = json.playlists.items;

console.log(playlistArray);


export const App = () => {
  return (
    <div className="content">
      <div> 
        <Playlistheader />
        <section className="left-section">
        {playlistArray.map(playlist => (
            <Playlists
              key={playlist.id}
              image={playlist.images[0].url}
              playlistURL={playlist.external_urls.spotify}
            />
          ))}
        </section>
      </div>
      <div>
        <Header />
        <section className="section-wrapper">
          {albumArray.map(album => (
            <Album
              key={album.artists[0].id}
              albumName={album.name}
              artistName={album.artists[0].name}
              image={album.images[0].url}
              albumURL={album.external_urls.spotify}
              artistURL={album.artists[0].external_urls.spotify}
              artists={album.artists}
            />
          ))}
        </section>
      </div>
    </div>
  );
};
