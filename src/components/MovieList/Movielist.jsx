import React from 'react';
import { Grid } from '@mui/material';
import useStyles from './styles';
import Movie from '../Movie/Movie';

// eslint-disable-next-line no-unused-vars
const Movielist = ({ movies }) => {
  // eslint-disable-next-line no-console
  console.log(movies);
  const classes = useStyles();
  return (
    <Grid container className={classes.moviesContainer}>
      {movies?.results.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default Movielist;
