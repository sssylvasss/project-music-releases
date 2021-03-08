import React from 'react';
import data from './data.json';
import { Header } from './Components/Header.js';
import { Album } from './Components/Album.js';

console.log(data);

export const App = () => {
  return (
    <div>
      <Header />
      <Album />
    </div>
  );
};
