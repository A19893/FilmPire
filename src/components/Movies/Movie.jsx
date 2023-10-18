import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useGetMoviesQuery } from '../../services/TMDB';
// eslint-disable-next-line import/no-cycle
import { MovieList } from '../index';

const Movie = () => {
  const { data, error, isFetching } = useGetMoviesQuery();
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">No movies match that name.<br /> Please search for something else</Typography>
      </Box>
    );
  }

  if (error) return 'An error has occured';
  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};

export default Movie;
