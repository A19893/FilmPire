/* eslint-disable arrow-body-style */
import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import useStyles from './styles';
import { Actors, MoviesInformation, Movies, Profile, NavBar } from './index';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/actors" element={<Actors />} />
          <Route path="/movie/:id" element={<MoviesInformation />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
