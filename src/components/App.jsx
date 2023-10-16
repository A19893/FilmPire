/* eslint-disable arrow-body-style */
import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { Actors, MoviesInformation, Movies, Profile, NavBar } from './index';

const App = () => {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <main>
        <Routes>
          <Route path="/movie/:id" element={<Movies />} />
          <Route path="/actors" element={<Actors />} />
          <Route path="/movieInfo" element={<MoviesInformation />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
