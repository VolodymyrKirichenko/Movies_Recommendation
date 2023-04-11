import React, { FC } from 'react';
import { Grid, Paper } from '@mui/material';
import { FilterMenu } from './FilterMenu/FilterMenu';
import { FiltersMain } from './FiltersMain/FiltersMain';
import { MoviesFilterInput } from '../typedefs/typedefs';

interface Props {
  filter: MoviesFilterInput,
  onSubmit: (data: MoviesFilterInput) => void,
  isDrawerOpen: boolean,
  onChangeDrawer: () => void,
}

export const Filters: FC<Props> = (props) => {
  const {
    filter,
    onSubmit,
    isDrawerOpen,
    onChangeDrawer,
  } = props;

  return (
    <Grid item xs={12}>
      <FilterMenu
        filter={filter}
        onSubmit={onSubmit}
        isDrawerOpen={isDrawerOpen}
        onChangeDrawer={onChangeDrawer}
      />

      <Paper elevation={3} sx={{ display: { xs: 'none', md: 'block' } }}>
        <FiltersMain
          onSubmit={onSubmit}
          initialValues={filter}
        />
      </Paper>
    </Grid>
  );
};
